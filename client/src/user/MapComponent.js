import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Sos from './Sos';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MapComponent = () => {
    const mapRef = useRef(null);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [sourceCoordinates, setSourceCoordinates] = useState(null);
    const [destinationCoordinates, setDestinationCoordinates] = useState(null);
    const [userIconMarker, setUserIconMarker] = useState(null);
    const [routingControl, setRoutingControl] = useState(null); 
    const [isNavigated, setIsNavigated] = useState(false); 
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:5000/auth/viewtripbyid', { id: location.state.id });
            setData(response.data);

            if (response.data.sourceStation && response.data.destinationStation) {
                const sourceResult = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${response.data.sourceStation}`);
                const destinationResult = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${response.data.destinationStation}`);
                if (sourceResult.data.length > 0 && destinationResult.data.length > 0) {
                    setSourceCoordinates([parseFloat(sourceResult.data[0].lat), parseFloat(sourceResult.data[0].lon)]);
                    setDestinationCoordinates([parseFloat(destinationResult.data[0].lat), parseFloat(destinationResult.data[0].lon)]);
                } else {
                    setError("Source or destination coordinates not found");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, [location.state.id]);

    useEffect(() => {
        if (sourceCoordinates && destinationCoordinates) {
            if (!mapRef.current) {
                mapRef.current = L.map('map').setView(sourceCoordinates, 11);
                const mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: 'Leaflet &copy; ' + mapLink + ', contribution',
                    maxZoom: 18
                }).addTo(mapRef.current);
            }

            const map = mapRef.current;

            // Add polyline to show shortest road between source and destination
            const control = L.Routing.control({
                waypoints: [
                    L.latLng(sourceCoordinates),
                    L.latLng(destinationCoordinates)
                ],
                routeWhileDragging: true,
                lineOptions: {
                    styles: [{ color: 'red', opacity: 0.7, weight: 5 }]
                },
                createMarker: function () { return null; }
            });
            setRoutingControl(control.addTo(map));

            // Add marker for source and destination
            L.marker(sourceCoordinates).addTo(map)
                .bindPopup(`<b>Source:</b> ${data.sourceStation}`);

            L.marker(destinationCoordinates).addTo(map)
                .bindPopup(`<b>Destination:</b> ${data.destinationStation}`);

            // Initialize user icon marker
            const userIcon = L.icon({
                iconUrl: data.photo,
                iconSize: [40, 40],
            });
            setUserIconMarker(L.marker(sourceCoordinates, { icon: userIcon }).addTo(map));

            map.fitBounds([sourceCoordinates, destinationCoordinates]);
        }
    }, [sourceCoordinates, destinationCoordinates]);

    useEffect(() => {
        if (userIconMarker && routingControl ) {
            // Animate user icon marker along the route
            routingControl.on('routesfound', function (e) {
                const route = e.routes[0];
                const index = 0;
                const segment = route.coordinates[index];
                moveMarker(segment, index + 1, route);
            });
        }
    }, [userIconMarker, routingControl, sourceCoordinates, destinationCoordinates, ]);

    const displayCoordinates = async () => {
        if (userIconMarker) {
            const coordinates = userIconMarker.getLatLng();
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coordinates.lat}&lon=${coordinates.lng}`);
            const placeInfo = response.data.address;
            const stateDistrict = placeInfo.state_district;
            
            try {
                const userId = data._id;
                await axios.post('http://localhost:5000/auth/submitalert', {
                    userId: userId,
                    coordinates: {
                        stateDistrict: stateDistrict 
                    },

                });
            } catch (error) {
                console.error('Error saving SOS request:', error);
            }
			setIsNavigated(true);
            alert(`You are in ${stateDistrict}. Help will arrive in a few minutes.`);
            navigate('/userhelp', { state: { data } });

        }
    };

	let destinationReached = false; 

    async function moveMarker(segment, index, route) {
        setTimeout(async function () {
            if (!isNavigated) {
                userIconMarker.setLatLng(L.latLng(segment.lat, segment.lng));
                if (index < route.coordinates.length) {
                    moveMarker(route.coordinates[index], index + 1, route);
                } else {
                    try {
						if (!destinationReached) {
							toast.success("You have reached the destination successfully!", {
								toastId: 'destinationToast',
								onClose: async () => {
									destinationReached = true;
									try {
										const userId = data._id;
										await axios.post('http://localhost:5000/auth/submitstatus', {
											userId: userId,
											tripStatus: 1
										});
										console.log("Navigating to '/userhistory'...");
										navigate('/userhistory');
									} catch (error) {
										console.error(error);
									}
									destinationReached = true;
								}
							});
						}
                    } catch (error) {
                        console.error(error);
                    }                
                }
            }
        }, 2); 
    }

    return (
        <>
            <Navbar />
            <div>
                {error ? (
                    <div>Error: {error}</div>
                ) : (
                    <div id="map" style={{ width: '100%', height: '100vh' }}></div>
                )}
            </div>
            <Sos displayCoordinates={displayCoordinates} />
            <ToastContainer />
        </>
    );
}

export default MapComponent;




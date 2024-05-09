import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sos from './Sos';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; 

function Useractive() {
    const [activeTrips, setActiveTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('data'));
                const res = await axios.get('/auth/userdata', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (res.data.success) {
                    const response = await axios.get('/auth/formvalid');
                    const currentDate = new Date();
                    const filteredFormData = response.data.data.filter(form => {
                        const travelDateTime = new Date(form.travelDate);
                        const travelTimeParts = form.travelTime.split(':');
                        travelDateTime.setHours(parseInt(travelTimeParts[0]));
                        travelDateTime.setMinutes(parseInt(travelTimeParts[1]));

                        const returnDateTime = new Date(form.returnDate);
                        const returnTimeParts = form.returnTime.split(':');
                        returnDateTime.setHours(parseInt(returnTimeParts[0]));
                        returnDateTime.setMinutes(parseInt(returnTimeParts[1]));

                        return form.userId === res.data.data._id && form.approvalStatus === 1 && (form.tripStatus === undefined && form.status === undefined) &&
                            currentDate >= travelDateTime && currentDate <= returnDateTime;
                    });
                    setActiveTrips(filteredFormData.reverse());
                } else {
                    navigate('/login');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [activeTrips]);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    {loading ? (
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <>
                            {activeTrips.length <= 0 ? (
                                <div style={{ textAlign: 'center', padding: '20px', background: '#f8d7da', color: '#721c24', borderRadius: '10px', border: '2px solid #f5c6cb', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '250px' }}>
                                    <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>No active trips found.</p>
                                    <p style={{ fontSize: '16px', color: '#721c24' }}>Check back later for updates.</p>
                                </div>
                            ) : (
								<>
                                    <h2 style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>Active Trips</h2>
                                    {activeTrips.map(trip => (
                                        <div key={trip._id} className="col-md-5 mb-4" >
                                            <div className="card shadow" style={{ border: 'none',height:'500px' }}>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <img src={trip.photo} className="card-img-top rounded-circle mb-4" alt="UserPhoto" style={{ height: '150px' }} />
                                                            <p className="card-title"><strong style={{ color: '#17a2b8' }}>User Name:</strong> {trip.name}</p>
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Age:</strong> {trip.age}</p>
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Source:</strong> {trip.sourceStation}</p>
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Destination:</strong> {trip.destinationStation}</p>
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Travel Date:</strong> {new Date(trip.travelDate).toLocaleDateString()}</p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Travel Time:</strong> {trip.travelTime}</p>
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Return Date:</strong> {new Date(trip.returnDate).toLocaleDateString()}</p>
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Return Time:</strong> {trip.returnTime}</p>
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Phone Number:</strong> {trip.phoneNumber}</p>
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Address:</strong> {trip.address}</p>
                                                            <p className="card-text"><strong style={{ color: '#17a2b8' }}>Trip Reason:</strong> {trip.travelReason}</p>
                                                            <img src={trip.signature} className="card-img-top " alt="UserPhoto" style={{ height: '80px' }} />
                                                        </div>
														<div className="d-flex justify-content-center mt-2">
															<Link to="/map" state={{ id: trip._id }} className="btn btn-primary">Start</Link>
														</div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
            {/* <Sos /> */}
        </>
    );
}

export default Useractive;



// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Sos from './Sos';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom

// function Useractive() {
//     const [activeTrips, setActiveTrips] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchData = async () => {
// 			try {
// 				const token = JSON.parse(localStorage.getItem('data'));
// 				const res = await axios.get('/auth/userdata', {
// 					headers: {
// 						Authorization: `Bearer ${token}`,
// 					},
// 				});
// 				if (res.data.success) {
// 					const response = await axios.get('/auth/formvalid');
// 					const currentDate = new Date(); // Current date
// 					const currentDateString = currentDate.toISOString().split('T')[0]; // Extract date part only
// 					setActiveTrips(response.data.data.filter(form => {
// 						const travelDate = new Date(form.travelDate); // Parse travelDate into Date object
// 						const returnDate = new Date(form.returnDate); // Parse returnDate into Date object
// 						const travelDateString = travelDate.toISOString().split('T')[0]; // Extract date part only
// 						const returnDateString = returnDate.toISOString().split('T')[0]; // Extract date part only
// 						return form.userId === res.data.data._id &&
// 							form.approvalStatus === 1 &&
// 							(form.tripStatus === undefined && form.status === undefined) &&
// 							(currentDateString === travelDateString || 
// 							currentDateString === returnDateString) 
// 					}).reverse());
// 				} else {
// 					navigate('/login');
// 				}
// 				setLoading(false);
// 			} catch (error) {
// 				console.error('Error fetching data:', error);
// 			}
// 		};
		
		
		

//         fetchData();
//     }, [activeTrips]);

//     return (
//         <>
//             <Navbar />
//             <div className="container">
//                 <div className="row justify-content-center">
//                     {loading ? (
//                         <div className="spinner-border text-primary" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                     ) : (
//                         <>
//                             {activeTrips.length <= 0 ? (
//                                 <div style={{ textAlign: 'center', padding: '20px', background: '#f8d7da', color: '#721c24', borderRadius: '10px', border: '2px solid #f5c6cb', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '250px' }}>
//                                     <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>No active trips found.</p>
//                                     <p style={{ fontSize: '16px', color: '#721c24' }}>Check back later for updates.</p>
//                                 </div>
//                             ) : (
// 								<>
//                                     <h2 style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>Active Trips</h2>
//                                     {activeTrips.map(trip => (
//                                         <div key={trip._id} className="col-md-5 mb-4" >
//                                             <div className="card shadow" style={{ border: 'none',height:'500px' }}>
//                                                 <div className="card-body">
//                                                     <div className="row">
//                                                         <div className="col-md-6">
//                                                             <img src={trip.photo} className="card-img-top rounded-circle mb-4" alt="UserPhoto" style={{ height: '150px' }} />
//                                                             <p className="card-title"><strong style={{ color: '#17a2b8' }}>User Name:</strong> {trip.name}</p>
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Age:</strong> {trip.age}</p>
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Source:</strong> {trip.sourceStation}</p>
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Destination:</strong> {trip.destinationStation}</p>
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Travel Date:</strong> {new Date(trip.travelDate).toLocaleDateString()}</p>
//                                                         </div>
//                                                         <div className="col-md-6">
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Travel Time:</strong> {trip.travelTime}</p>
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Return Date:</strong> {new Date(trip.returnDate).toLocaleDateString()}</p>
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Return Time:</strong> {trip.returnTime}</p>
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Phone Number:</strong> {trip.phoneNumber}</p>
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Address:</strong> {trip.address}</p>
//                                                             <p className="card-text"><strong style={{ color: '#17a2b8' }}>Trip Reason:</strong> {trip.travelReason}</p>
//                                                             <img src={trip.signature} className="card-img-top " alt="UserPhoto" style={{ height: '80px' }} />
//                                                         </div>
// 														<div className="d-flex justify-content-center mt-2">
// 															<Link to="/map" state={{ id: trip._id }} className="btn btn-primary">Start</Link>
// 														</div> 
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </>
//                             )}
//                         </>
//                     )}
//                 </div>
//             </div>
//             <Sos />
//         </>
//     );
// }

// export default Useractive;


														
														
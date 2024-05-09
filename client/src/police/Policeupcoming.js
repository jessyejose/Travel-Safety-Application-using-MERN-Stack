import React, { useEffect, useState } from 'react';
import Policenavbar from './Policenavbar';
import axios from 'axios';
import Policealert from './Policealert';

function Policeupcoming() {
    const [upcomingTrips, setUpcomingTrips] = useState([]);
	const [loading, setLoading] = useState(true);
    const token = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/auth/formvalid');
                const currentDate = new Date();

                const filteredFormData = response.data.data.filter(form => {
                    const travelDateTime = new Date(form.travelDate); 
                    const travelTimeParts = form.travelTime.split(':');
                    travelDateTime.setHours(parseInt(travelTimeParts[0])); 
                    travelDateTime.setMinutes(parseInt(travelTimeParts[1])); 

                    return (form.sourceStation === token.location || form.destinationStation === token.location )&& form.approvalStatus === 1 && currentDate < travelDateTime;
                });
                setUpcomingTrips(filteredFormData.reverse());
				setLoading(false);
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        };

        fetchData();
    }, [upcomingTrips]);

	if (loading) {
        return (
            <div style={{ textAlign: 'center', marginTop: '250px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <Policenavbar />
            <div className="container">
                <div className="row justify-content-center">
				{upcomingTrips.length <= 0 ? (
					<div style={{ textAlign: 'center', padding: '20px', background: '#f8d7da', color: '#721c24', borderRadius: '10px', border: '2px solid #f5c6cb', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',marginTop:'250px' }}>
						<p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>No upcoming trips found.</p>
						<p style={{ fontSize: '16px', color: '#721c24' }}>Check back later for updates.</p>
					</div>
                ) : (
					<>
						<h2 style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '3rem' }}>Upcoming Trips</h2>
						{upcomingTrips.map(trip => (
							<div key={trip._id} className="col-md-4 mb-4">
								<div className="card shadow" style={{ border: 'none' }}>
									<div className="card-body">
										<div className="row">
											<div className="col-md-6">
												<img src={trip.photo} className="card-img-top rounded-circle mb-4" alt="UserPhoto" style={{height:'150px'}}/>
												<p className="card-title"><strong style={{ color: '#17a2b8' }}>User Name:</strong> {trip.name}</p>
												<p className="card-text"><strong style={{ color: '#17a2b8'}}>Age:</strong> {trip.age}</p>
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
												<img src={trip.signature} className="card-img-top " alt="UserPhoto" style={{height:'80px'}}/>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</>
                )}
                </div>
            </div>
		<Policealert/>
			
        </>
    );
}

export default Policeupcoming;

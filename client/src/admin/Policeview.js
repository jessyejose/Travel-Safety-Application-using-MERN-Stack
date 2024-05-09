import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';

function Policeview() {
    const [policeData, setPoliceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/auth/policedata');
                const filteredFormData = response.data.data.filter(item => item.status === 1);
                setPoliceData(filteredFormData.reverse()); 
            } catch (error) {
                console.error('Error fetching police data:', error);
            }
        };
        fetchData();
    }, [policeData]);

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 mt-4" >
						<h2 className='text-center text-primary'>OUR POLICE STATION</h2><br/>
                        <div className="row">
                            {policeData.map(police => (
                                <div key={police._id} className="col-md-6 mb-4">
								<div className="card" style={{ height: '650px' }}>
									<img src={police.policeStationImage} className="card-img-top" alt="Police Station" style={{ width: '580px', height: '350px' }}/>
									<div className="card-body text-justify" style={{ height: '300px', overflowY: 'auto' }}>
										<h5 className="card-title text-success"><b>{police.name}</b></h5>
										<p className="card-text">{police.description}</p>
										<p className="card-text"><b>Location:</b> {police.location}</p>
										<p className="card-text"><b>Email:</b> {police.email}</p>
										<img src={police.headPoliceImage} alt="Head Police" className="mb-3 rounded-circle" style={{ width: '90px', height: '90px' }} />
										<p className="card-text"><b>Head Police Name:</b> {police.headPoliceName}</p>
									</div>
								</div>
							</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Policeview;

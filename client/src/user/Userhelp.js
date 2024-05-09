import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sos from './Sos';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

function Userhelp() {
    const location = useLocation();
    const userData = location.state.data;
    const navigate = useNavigate();
    const [policeData, setPoliceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/auth/formvalid');
                const filteredFormData = response.data.data.filter(form => {
                    return userData._id === form._id;
                });

                const responses = await axios.get('/auth/policedata');
                const filteredData = responses.data.data.filter(item => item._id === filteredFormData[0].policeId);
                setPoliceData(filteredData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [ policeData]);

    return (
        <>
            <Navbar />
            <div className="container-fluid bg-light" style={{ minHeight: '100vh' }}>
                <div className="row justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                    <div className="col-md-5">
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded text-center" style={{height:'370px'}}>
                            <div className="card-body">
                                <img src={userData.photo} alt="User" className="img-fluid rounded-circle mb-4" style={{ width: '150px', height: '150px' }} />
                                <h2 className="card-title mb-3">{userData.name}</h2>
                                <p className="card-text">Help is on the way...</p>
                            </div>
                        </div>
                    </div>
                    {policeData.length > 0 ? (
                        <>
                            <div className="col-md-2">
                                <div className="card shadow-lg p-3 mb-5 bg-white rounded text-center">
									<div className="card-body">
										<h6 className='text-success'>Please confirm receipt of assistance before accepting, {userData.name}.</h6>
                                    </div>
                                    <div className="card-body">
                                        <button className="btn btn-primary" onClick={() => navigate('/userhistory')}>Accept</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="card shadow-lg p-3 mb-5 bg-white rounded text-center">
                                    <div className="card-body">
                                        <img src={policeData[0].headPoliceImage} alt="Police" className="img-fluid rounded-circle mb-4" style={{ width: '150px', height: '150px' }} />
                                        <h2 className="card-title mb-3">{policeData[0].headPoliceName}</h2>
										<h4 className='text-success'>Inspector of {policeData[0].name}</h4>
                                        <p className="card-text">Help is near you...</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Userhelp;

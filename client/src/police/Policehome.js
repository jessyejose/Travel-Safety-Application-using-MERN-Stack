import React, { useEffect, useState } from 'react';
import Policenavbar from './Policenavbar';
import axios from 'axios';
import Policealert from './Policealert';

function Policehome() {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const [policeData, setPoliceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('userInfo'));
                const response = await axios.get('/auth/policedata', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const filteredData = response.data.data.filter(item => item._id === userData._id);
                if (filteredData.length > 0) {
                    setPoliceData(filteredData);
                } else {
                    console.error('No police station found for the user ID:', userData._id);
                }
            } catch (error) {
                console.error('Error fetching police data:', error);
            }
        };

        fetchData();
    }, [userData]);

    return (
        <>
		<div style={{ backgroundColor: '#FFFBF5', minHeight: '100vh' }}>
            <Policenavbar />
            <div className="container mt-5" style={{ paddingLeft: '15px', paddingRight: '15px'}}>
                {policeData.map(police => (
                    <div key={police._id} className="card mb-4 shadow">
                        <div className="card-body">
						<h2 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', color: '#007bff' }}>Welcome to {police.location} Police Station</h2>
                            <div className="row">
                                <div className="col-md-5 mt-5">
                                    <img src={police.policeStationImage} className="img-fluid rounded" alt="Police Station"  />
                                </div>
                                <div className="col-md-7">
                                    <p className="card-text fs-5 text-justify mt-4">{police.description}</p>
                                    <p className="card-text fs-5 text-justify mt-4">Our police station is committed to ensuring the safety and security of our community. We provide a range of services and support to residents and visitors, including:</p>
                                    <ul className="card-text fs-5 text-justify mt-4">
                                        <li>24/7 Emergency Response</li>
                                        <li>Crime Prevention Programs</li>
                                        <li>Community Outreach Initiatives</li>
                                        <li>Traffic Control and Enforcement</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3>Meet Our Head Police Officer</h3>
                                <div className="d-flex align-items-center  mt-4">
                                    <img src={police.headPoliceImage} alt="Head Police Officer" className="rounded-circle mr-3" style={{ width: '100px', height: '100px' }} />
                                    <div>
                                        <h4 className="mb-0">{police.headPoliceName}</h4>
                                        <p className="fs-5 text-muted mt-2">With years of experience in law enforcement, our Head Police Officer leads our team with dedication and professionalism.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

			<section className="welcome_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ marginTop: "80px", marginLeft: '120px' }}>
                                <img className="img-fluid" src="images/pp.avif" alt="WelcomeImage" style={{height:'400px',width:'500px'}} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="welcome_detail text-justify">
                                <h2>SecureExplorer - Your Trusted Travel Security Partner</h2>
                                <p>SecureExplorer is your dedicated companion for ensuring safety and security during your travels. We understand the importance of peace of mind while journeying, and our mission is to provide comprehensive security services tailored to your needs.</p>
                                <p>Our team at SecureExplorer is committed to leveraging the latest technologies and expert security personnel to safeguard your travels. Whether you're embarking on a business trip or exploring new destinations for leisure, we're here to empower you with confidence and security every step of the way.</p>
                                <p>With SecureExplorer, you can rest assured knowing that you have a reliable security partner watching over you. Our advanced tracking systems and proactive approach ensure that your safety remains our top priority, allowing you to focus on enjoying your journey to the fullest.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <h1 className="mb-4 text-primary">How It Works ?</h1>
                <div className="row text-justify">
                    <div className="col-md-6 mb-4">
                        <h2>User Registration and Travel Details Submission 📝</h2>
                        <p>Users register on SecureExplorer and provide necessary travel and personal details through the user module.</p>
                        <p>Travel details including date, time, source, destination, and personal information are submitted for review.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h2>Communication with Security Providers 📡</h2>
                        <p>SecureExplorer automatically sends user travel details to the source security provider associated with the user's departure location.</p>
                        <p>Upon approval from the source security provider, user details are forwarded to the destination security provider for tracking.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h2>Location Tracking for User Safety 📍</h2>
                        <p>With approved user details, SecureExplorer activates location tracking to monitor the user's journey for safety purposes.</p>
                        <p>Destination security providers utilize tracking mechanisms to monitor the user's location and ensure their well-being throughout their journey.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h2>Emergency Response Activation 🚨</h2>
                        <p>In emergencies, such as the user activating the SOS button or security concerns arise during travel, SecureExplorer alerts both the source and destination security providers.</p>
                        <p>Security providers coordinate efforts to respond promptly and ensure the user's safety, leveraging real-time communication and location tracking data.</p>
                    </div>
                </div>
            </div>

            <section className="layout_padding story_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img className="img-fluid rounded-circle" src="images/security.jpg" alt="SecurityImage" style={{ height: '400px', width: '400px', marginLeft: '70px', marginTop: '10px', marginBottom: '10px' }} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="story_detail text-justify">
                                <h3>Our</h3>
                                <h2>Success Stories</h2>
                                <p>SecureExplorer has been instrumental in providing timely and effective security solutions, ensuring the safety of our clients in various situations. We pride ourselves on our successful interventions and the positive impact we've made in safeguarding individuals and their assets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid footer_section">
                <p>Copyright &copy; 2024 All Rights Reserved By SECUREEXPLORER</p>
            </section>
		</div>
		<Policealert/>
        </>
    );
}

export default Policehome;

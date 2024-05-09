import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Adminabout() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div className="container mt-5">
              <h2 className="mb-4 text-primary">Our Mission 🚀</h2>
              <p className="mb-4 fs-5 text-justify">At SecureExplorer, our mission is to leverage advanced technology to empower both users and security providers, enabling proactive monitoring and swift response to emergencies. We are committed to creating a safer environment by fostering collaboration and leveraging innovation in security management.</p>
              <h3 className="mb-4 text-primary">Features ✨</h3>
              <div className="row">
                <div className="col-md-4">
                  <h3 className='mb-4'>User Module :</h3>
                  <ul>
                    <li className=' text-justify mb-3' style={{fontSize:'17px'}}>SecureExplorer's user module allows users to register and submit travel details including date, time, source, and destination, along with personal information.</li>
                    <li className=' text-justify mb-3' style={{fontSize:'17px'}}>Users can activate a distress signal (SOS button) in emergencies, triggering alerts to nearby security stations for immediate assistance.</li>
                    <li className=' text-justify mb-4' style={{fontSize:'17px'}}>Seamless communication between users and security providers ensures prompt response and assistance during critical situations.</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h3 className='mb-4'>Admin Module :</h3>
                  <ul>
                    <li className=' text-justify mb-3' style={{fontSize:'17px'}}>The admin module provides administrators with secure access to manage police station details and login credentials.</li>
                    <li className=' text-justify mb-3' style={{fontSize:'17px'}}>Administrators can add, edit, and update police station information, ensuring accurate records and compliance with security protocols.</li>
                    <li className=' text-justify mb-3' style={{fontSize:'17px'}}>Secure access controls maintain data integrity and safeguard sensitive information within the system.</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h3 className='mb-4'>Security Provider Module :</h3>
                  <ul>
                    <li className=' text-justify mb-3' style={{fontSize:'17px'}}>SecureExplorer's security provider module enables security agencies to receive and manage user travel details for proactive monitoring and response.</li>
                    <li className=' text-justify mb-3' style={{fontSize:'17px'}}>Security providers can review user submissions, approve travel plans, and activate location tracking for enhanced user safety.</li>
                    <li className=' text-justify mb-3' style={{fontSize:'17px'}}>Real-time communication and coordination with users and other security providers facilitate efficient emergency response and assistance.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Adminabout

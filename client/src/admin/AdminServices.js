import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function AdminServices() {
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
              <h1 className="mb-4 text-primary">How It Works ?</h1>
              <div className="row">
                <div className="col-md-6 mb-4 mt-4">
                  <h2 style={{ textAlign: 'justify',marginBottom:'30px' }}>User Registration and Travel Details Submission 📝</h2>
                  <p style={{ textAlign: 'justify' ,fontSize:'18px' }}>Users register on SecureExplorer and provide necessary travel and personal details through the user module.</p>
                  <p style={{ textAlign: 'justify' ,fontSize:'18px' }}>Travel details including date, time, source, destination, and personal information are submitted for review.</p>
                </div>
                <div className="col-md-6 mb-4 mt-4">
                  <h2 style={{ textAlign: 'justify',marginBottom:'30px' }}>Communication with Security Providers 📡</h2>
                  <p style={{ textAlign: 'justify' ,fontSize:'18px'}}>SecureExplorer automatically sends user travel details to the source security provider associated with the user's departure location.</p>
                  <p style={{ textAlign: 'justify' ,fontSize:'18px' }}>Upon approval from the source security provider, user details are forwarded to the destination security provider for tracking.</p>
                </div>
                <div className="col-md-6 mb-4 mt-4">
                  <h2 style={{ textAlign: 'justify',marginBottom:'30px' }}>Location Tracking for User Safety 📍</h2>
                  <p style={{ textAlign: 'justify' ,fontSize:'18px' }}>With approved user details, SecureExplorer activates location tracking to monitor the user's journey for safety purposes.</p>
                  <p style={{ textAlign: 'justify' ,fontSize:'18px' }}>Destination security providers utilize tracking mechanisms to monitor the user's location and ensure their well-being throughout their journey.</p>
                </div>
                <div className="col-md-6 mb-4 mt-4">
                  <h2 style={{ textAlign: 'justify',marginBottom:'30px' }}>Emergency Response Activation 🚨</h2>
                  <p style={{ textAlign: 'justify' ,fontSize:'18px' }}>In emergencies, such as the user activating the SOS button or security concerns arise during travel, SecureExplorer alerts both the source and destination security providers.</p>
                  <p style={{ textAlign: 'justify' ,fontSize:'18px' }}>Security providers coordinate efforts to respond promptly and ensure the user's safety, leveraging real-time communication and location tracking data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminServices;

import React from 'react';
import Navbar from './Navbar';
import Sos from './Sos';

function Services() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="text-center mb-5 mt-5" >Our Services for Travelers</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">🆘 24/7 Emergency Assistance</h5>
                <p className="card-text">Access to emergency services anytime, anywhere during your travels.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">🛡️ Travel Insurance</h5>
                <p className="card-text">Comprehensive travel insurance coverage for unexpected events.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">🚗 Secure Transportation</h5>
                <p className="card-text">Safe and reliable transportation options for hassle-free travel.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">🚨 Travel Alerts</h5>
                <p className="card-text">Real-time alerts and updates on travel advisories and security risks.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">🌐 Language Translation</h5>
                <p className="card-text">Translation services to overcome language barriers while traveling.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">📍 Local Guides</h5>
                <p className="card-text">Experienced local guides to enhance your travel experience.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <h3>Why Choose SecureExplorer?</h3>
          <p className="lead">
            SecureExplorer is your trusted partner for ensuring safety and security during your travels. Here's why you should choose us:
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Comprehensive security solutions tailored to your needs.</li>
            <li className="list-group-item">Expert security personnel equipped with the latest technologies.</li>
            <li className="list-group-item">Real-time tracking and emergency assistance.</li>
            <li className="list-group-item">24/7 customer support for peace of mind.</li>
          </ul>
        </div>
      </div>

	  {/* <Sos/> */}
    </>
  );
}

export default Services;

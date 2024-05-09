import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Admin() {
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
				<h1 className="mb-4" style={{color:'#720e9e'}}>Welcome to SecureExplorer</h1>
				<p className="lead mb-4" style={{fontSize:'20px',fontWeight:'inherit'}}>Your comprehensive solution for ensuring safety and security during travel. SecureExplorer is dedicated to bridging the gap between users and security providers, facilitating seamless communication and coordination to enhance public safety.</p>
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title mb-4" style={{color:'#720e9e'}}>Our Mission</h5>
                        <p className="card-text text-justify mb-2" style={{fontSize:'18px'}}>At SecureExplorer, our mission is to leverage advanced technology to empower both users and security providers, enabling proactive monitoring and swift response to emergencies. We are committed to creating a safer environment by fostering collaboration and leveraging innovation in security management.</p>
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title mb-4" style={{color:'#720e9e'}}>Features</h5>
                        <ul className="list-group">
                            <li className="list-group-item" style={{fontSize:'18px'}}><b>User Module:</b> SecureExplorer's user module allows users to register and submit travel details including date, time, source, and destination, along with personal information.</li>
                            <li className="list-group-item" style={{fontSize:'18px'}}><b>Admin Module:</b> The admin module provides administrators with secure access to manage police station details and login credentials.</li>
                            <li className="list-group-item" style={{fontSize:'18px'}}><b>Security Provider Module:</b> SecureExplorer's security provider module enables security agencies to receive and manage user travel details for proactive monitoring and response.</li>
                        </ul>
                    </div>
                </div>
			</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  flex-column" style={{ height: '100vh',marginLeft:'-25px',backgroundColor:'lightcyan' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/adminadd" className="nav-link" style={{fontStyle:"italic",fontSize:'20px',margin:'20px 0px'}}><b>Add Stations</b></Link>
            </li>
			<li className="nav-item">
              <Link to="/policeview" className="nav-link" style={{fontStyle:"italic",fontSize:'20px',margin:'20px 0px'}}><b>Police Stations</b></Link>
            </li>
			<li className="nav-item">
              <Link to="/userview" className="nav-link" style={{fontStyle:"italic",fontSize:'20px',margin:'20px 0px'}}><b>Our User </b></Link>
            </li>
            <li className="nav-item">
              <Link to="/adminactive" className="nav-link" style={{fontStyle:"italic",fontSize:'20px',margin:'20px 0px'}}><b>Active Trip</b></Link>
            </li>
			<li className="nav-item">
              <Link to="/adminupcoming" className="nav-link" style={{fontStyle:"italic",fontSize:'20px',margin:'20px 0px'}}><b>Upcoming Trip</b></Link>
            </li>
			<li className="nav-item">
              <Link to="/adminhistroy" className="nav-link" style={{fontStyle:"italic",fontSize:'20px',margin:'20px 0px'}}><b>Trip Histroy</b></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;

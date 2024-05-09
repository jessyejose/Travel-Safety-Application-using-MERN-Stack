import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

function Policenavbar() {
	const navigate=useNavigate()
  const brandStyle = { fontSize: '30px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', marginLeft: '-10px' };
  const logout=()=>{
	localStorage.removeItem('userInfo')
	navigate('/')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'lightsteelblue' }}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col">
            <a className="navbar-brand" href="/policehome" style={brandStyle}>SecureExplorer</a>
          </div>
          <div className="col text-right">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/policehome" style={{padding:'10px 30px',fontSize:'20px'}}><b>Home</b></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/policevalid" style={{padding:'10px 30px',fontSize:'20px'}}><b>Trip Validation</b></a>
                </li>
				<li className="nav-item">
                  <a className="nav-link" href="/policeactive" style={{padding:'10px 30px',fontSize:'20px'}}><b>Active Trip</b></a>
                </li>
				<li className="nav-item">
                  <a className="nav-link" href="/policeupcoming" style={{padding:'10px 30px',fontSize:'20px'}}><b>Upcoming Trip</b></a>
                </li>
				<li className="nav-item">
                  <a className="nav-link" href="/policehistory" style={{padding:'10px 30px',fontSize:'20px'}}><b>Trip Histroy</b></a>
                </li>
				<li className="nav-item">
					<Link to="/"  class="nav-link" onClick={logout} style={{padding:'10px 30px',fontSize:'20px'}}>
					<b>Logout</b>
					</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Policenavbar;

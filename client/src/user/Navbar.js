import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate=useNavigate()
	
	const logout=()=>{
		localStorage.removeItem('data')
		navigate('/')
	}
  return (
	<header class="header_section">
    <div class="container">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand" href="#">
          <div class="logo_box">
            <img src="images/logo.png" alt=""  style={{ width: '150px', height: '100px' }}/>
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-2">
            <li class="nav-item active">
				<Link to="/userhome"  class="nav-link" >
					Home
				</Link>
            </li>
            <li class="nav-item">
				<Link to="/about"  class="nav-link" >
					About
				</Link>
            </li>
            <li class="nav-item">
				<Link to="/services"  class="nav-link" >
					Services
				</Link>
            </li>
			<li class="nav-item">
				<Link to="/form"  class="nav-link" >
					CIR Form
				</Link>
            </li>
			<li class="nav-item">
				<Link to="/statusview"  class="nav-link" >
					Status View
				</Link>
            </li>
			<li class="nav-item">
				<Link to="/useractive"  class="nav-link" >
					Active Trip
				</Link>
            </li>
			<li class="nav-item">
				<Link to="/userupcoming"  class="nav-link" >
					Upcoming Trip
				</Link>
            </li>
			<li class="nav-item">
				<Link to="/userhistory"  class="nav-link" >
					 History
				</Link>
            </li>
            <li class="nav-item">
				<Link to="/"  class="nav-link" onClick={logout}>
					Logout
				</Link>
			</li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control nav_search-input mr-sm-2 d-none" type="search" placeholder="Search"
              aria-label="Search" value="" />
            <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
          </form>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Navbar

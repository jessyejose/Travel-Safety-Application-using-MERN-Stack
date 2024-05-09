import React from 'react'
import { Link} from 'react-router-dom';

function Home() {


  return (
	<>
	  	<header class="header_section">
			<div class="container">
			<nav class="navbar navbar-expand-lg custom_nav-container ">
				<a class="navbar-brand" href="# ">
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
						<Link to="/login"  class="nav-link" >
							User Login
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/policelogin"  class="nav-link" >
							Police Login
						</Link>
					</li>
				</ul>
				
				</div>
			</nav>
			</div>
		</header>

		<section class="slider_section">
			<div id="carouselExampleIndicators" class="carousel slide vert" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner" >
					<div class="carousel-item active" style={{backgroundImage: 'url(../images/log.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
						<div class="slider_box">
							<div class="fixed_company-detail">
								<p style={{color:'F8FAE5'}}>
									SecureExplorer 
								</p>
							</div>
							<div class="slider-detail">
								<div class="slider_detail-heading">
									<h2 style={{color:'F8FAE5'}}>
										Welcome to SecureExplorer - Your Travel Security Companion
									</h2>
									<h1 style={{color:'F8FAE5'}}>
										Enhancing Your Travel Security Experience
									</h1>
								</div>
								<div class="slider_detail-text">
									<p style={{color:'#F8FAE5',textAlign:'justify'}}>
									SecureExplorer is dedicated to providing comprehensive security services for your travels. Our mission is to ensure your safety and peace of mind throughout your journey. 
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item" style={{backgroundImage: 'url(../images/reg.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
						<div class="slider_box" >
							<div class="fixed_company-detail">
								<p style={{color:'#F8FAE5',textAlign:'justify'}}>
									SecureExplorer 
								</p>
							</div>
							<div class="slider-detail">
								<div class="slider_detail-heading">
									<h2 style={{color:'#F8FAE5'}}>
										Stay Safe Anywhere You Go,Empowering Your Journeys
									</h2>
									<h1 style={{color:'#F8FAE5'}}>
										Peace of Mind, Wherever You Wander
									</h1>
								</div>
								<div class="slider_detail-text">
									<p style={{color:'#F8FAE5'}}>
										With SecureExplorer, you can travel with confidence, knowing that our security services are watching over you. Our advanced tracking technology ensures your safety, allowing you to focus on enjoying your journey.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item" style={{ backgroundImage: 'url(../images/banner.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
						<div class="slider_box">
							<div class="fixed_company-detail">
								<p style={{color:'#F8FAE5'}}>
									SecureExplorer 
								</p>
							</div>
							<div class="slider-detail">
								<div class="slider_detail-heading">
									<h2 style={{color:'#F8FAE5'}}>
										Your Safety, Our Priority - Your Trusted Security Partner
									</h2>
									<h1 style={{color:'#F8FAE5'}}>
										Expert Security Solutions for Every Journey
									</h1>
								</div>
								<div class="slider_detail-text">
									<p style={{color:'#F8FAE5',textAlign:'justify'}}>
										SecureExplorer is committed to providing personalized security solutions tailored to your needs. Whether you're traveling for business or pleasure, our dedicated team is here to ensure your safety and peace of mind.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</section>

		<section class="welcome_section layout_padding">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-6">
						<div style={{marginTop : "80px"}}>
							<img class="img-fluid" src="images/welcome.jpg" alt="Welcome Image" />
						</div>
					</div>
					<div class="col-md-6">
						<div class="welcome_detail">
							<h2>
								SecureExplorer - Your Trusted Travel Security Partner
							</h2>
							<p style={{textAlign:"justify"}}>
								SecureExplorer is your dedicated companion for ensuring safety and security during your travels. We understand the importance of peace of mind while journeying, and our mission is to provide comprehensive security services tailored to your needs.
							</p>
							<p style={{textAlign:"justify"}}>
								Our team at SecureExplorer is committed to leveraging the latest technologies and expert security personnel to safeguard your travels. Whether you're embarking on a business trip or exploring new destinations for leisure, we're here to empower you with confidence and security every step of the way.
							</p>
							<p style={{textAlign:"justify"}}>
								With SecureExplorer, you can rest assured knowing that you have a reliable security partner watching over you. Our advanced tracking systems and proactive approach ensure that your safety remains our top priority, allowing you to focus on enjoying your journey to the fullest.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="service_section">
			<div class="container">
				<div class="service_detail">
					<h2>
						Explore Our User Services
					</h2>
				</div>
				<div class="service_img-container">
					<div class="service_img-box i-box-2">
						<span style={{ color: 'black', fontWeight: 'bold' }}>Emergency SOS Services</span>
					</div>
					<div class="service_img-box i-box-1">
						<span style={{ color: 'black', fontWeight: 'bold' }}>Travel Security Assistance</span>
					</div>					
					<div class="service_img-box i-box-3">
						<span style={{ color: 'black', fontWeight: 'bold' }}>Location Tracking</span>
					</div>
					<div class="service_img-box i-box-4">
						<span style={{ color: 'black', fontWeight: 'bold' }}>Personalized Security Alerts</span>
					</div>
				</div>
			</div>
		</section>

		<section class="layout_padding story_section">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-6">
						<div>
							<img class="img-fluid rounded-circle" src="images/securit.jpg" alt="Security Image"  style={{height:'400px',width:'400px',marginLeft:'70px',marginTop:'10px',marginBottom:'10px'}}/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="story_detail">
							<h3>
								Our
							</h3>
							<h2>
								Success Stories
							</h2>
							<p>
								SecureExplorer has been instrumental in providing timely and effective security solutions, ensuring the safety of our clients in various situations. We pride ourselves on our successful interventions and the positive impact we've made in safeguarding individuals and their assets.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<section class="container-fluid footer_section">
			<p>
			Copyright &copy; 2024 All Rights Reserved By
			SECUREEXPLORER
			</p>
		</section>




	  
	</>
  )
}

export default Home

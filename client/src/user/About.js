import React from 'react'
import Navbar from './Navbar'
import Sos from './Sos'

function About() {
  return (
	<>
	<Navbar/>
	<div>
	<section className="welcome_section layout_padding" style={{ paddingTop: '20px', paddingBottom: '20px',marginTop:'50px',marginBottom:'50px'}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img className="img-fluid" src="images/security.jpg" alt="Welcome Image" style={{ height: '250px', marginLeft: '130px'}}/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="welcome_detail">
                <h3>Welcome</h3>
                <h2>Your Personalized Travel Security Companion</h2>
                <p style={{textAlign:"justify"}}>SecureExplorer provides personalized security solutions tailored to your needs. Whether you're traveling for business or pleasure, our dedicated team is here to ensure your safety and peace of mind throughout your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

	  <section className="info_section layout_padding" style={{ background: '#333', color: '#fff', paddingTop: '50px', paddingBottom: '50px',marginTop:'10px' }}>
		<div className="container">
			<div className="row">
			<div className="col-md-6 info_detail">
				<div>
				<h3><span role="img" aria-label="Track Your Journey">🛤️ Track Your Journey</span></h3>
				<p style={{textAlign:"justify"}}>With SecureExplorer, you can specify your travel date, time, source, and destination along with your personal details. Our platform enables you to track your journey in real-time and provides peace of mind knowing that help is just a click away.</p>
				</div>
			</div>
			<div className="col-md-6 address_container">
				<div>
				<h3><span role="img" aria-label="Contact Security Providers">📞 Contact Security Providers</span></h3>
				<p style={{textAlign:"justify"}}>Once your travel details are submitted, SecureExplorer automatically notifies the security providers at your source and destination. In case of emergencies, simply press the SOS button, and nearby security providers will be alerted to your location for immediate assistance.</p>
				</div>
			</div>
			</div>
		</div>
	</section>
      
	{/* <Sos/> */}
    </div>
	
	
	</>
  )
}

export default About

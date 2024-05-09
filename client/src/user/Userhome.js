import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sos from './Sos';

function Userhome() {
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState(null);
  const [det, setdet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('data'));
        const res = await axios.get('/auth/userdata', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.success) {
          setName(res.data.data.user);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
		  
         const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
          fetch(url)
            .then(res => res.json())
            .then(data => {
              console.table(data.address);
              setdet(data.address.suburb)
            });
        },
        function(error) {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [navigator,det]);

  return (
    <>
		<Navbar />

		<div className="container">
			<div className="row align-items-center ">
				<div className="col-md-6 mb-4 mb-md-0 ">
					<div className="mt-3">
						<h3 className=" mb-4"><strong>{name}, you are in<span style={{color:'green'}}> {det}</span></strong></h3>
					</div>
					<div style={{ height: '400px', width: '100%' }}>
						{userLocation ? (
						<iframe style={{paddingTop:'30px'}}
							title="User Location Map"
							width="100%"
							height="100%"
							src={`https://maps.google.com/maps?q=${userLocation.lat},${userLocation.lng}&output=embed`}
						/>
						) : (
						<p>Loading...</p>
						)}
					</div>
				</div>
				<div className="col-md-6">
				<section className="welcome_section layout_padding">
					<div className="welcome_detail" style={{ width: '100%' }}>
					<h2 className="text-primary mb-4">SecureExplorer - Your Trusted Travel Security Partner</h2>
					<p style={{ textAlign: 'justify' }}>
						SecureExplorer is your dedicated companion for ensuring safety and security during your travels. We understand the importance of peace of mind while journeying, and our mission is to provide comprehensive security services tailored to your needs.
					</p>
					<p style={{ textAlign: 'justify' }}>
						Our team at SecureExplorer is committed to leveraging the latest technologies and expert security personnel to safeguard your travels. Whether you're embarking on a business trip or exploring new destinations for leisure, we're here to empower you with confidence and security every step of the way.
					</p>
					<p style={{ textAlign: 'justify' }}>
						With SecureExplorer, you can rest assured knowing that you have a reliable security partner watching over you. Our advanced tracking systems and proactive approach ensure that your safety remains our top priority, allowing you to focus on enjoying your journey to the fullest.
					</p>
					</div>
				</section>
				</div>
			</div>
		</div>

		<div className="container pt-5">
			<div className="row">
				<div className="col-lg-5 mb-5">
				<h5 className="text-primary mb-3">Why Choose Us?</h5>
				<h1 className="mb-4">Top Level Security</h1>
				<img className="img-thumbnail mb-4 p-3" src="images/police.jpg" alt="Security Feature" style={{height:'600px'}}/>
				<p style={{textAlign:'justify'}}>
					We provide top-level security solutions to ensure the safety and protection of your assets. Our team is dedicated to delivering the highest standards of security services to our clients.
				</p>
				</div>
				<div className="col-lg-7">
					<div className="row">
						<FeatureCard icon="flaticon-policeman" title="High Security">
						<p style={{textAlign:'justify'}}>Our security measures are designed to provide a high level of protection against potential threats and intrusions. We employ advanced security technologies and protocols to safeguard your premises.</p>
						</FeatureCard>
						<FeatureCard icon="flaticon-bodyguard" title="Trained Guards">
						<p style={{textAlign:'justify'}}>Our team of trained guards undergo rigorous training programs to ensure they are equipped with the necessary skills and expertise to handle any security situation effectively. They are trained in conflict resolution, surveillance techniques, and emergency response procedures.</p>
						</FeatureCard>
						<FeatureCard icon="flaticon-approved" title="Govt Approved">
						<p style={{textAlign:'justify'}}>We are a government-approved security provider, complying with all regulatory requirements and standards. Our adherence to government regulations ensures that our security services meet the highest industry standards and are recognized for their reliability and effectiveness.</p>
						</FeatureCard>
						<FeatureCard icon="flaticon-medal" title="Award Winning">
						<p style={{textAlign:'justify'}}>We have been recognized for our excellence in providing security solutions with numerous awards and accolades. Our commitment to innovation, professionalism, and customer satisfaction has earned us the trust and recognition of our peers and industry experts.</p>
						</FeatureCard>
						<FeatureCard icon="flaticon-helmet" title="Latest Equipments">
						<p style={{textAlign:'justify'}}>We utilize the latest security equipment and technologies to enhance the effectiveness of our security solutions. From surveillance cameras and access control systems to biometric scanners and perimeter fencing, we deploy cutting-edge security solutions tailored to your specific needs.</p>
						</FeatureCard>
						<FeatureCard icon="flaticon-surveillance" title="24/7 Support">
						<p style={{textAlign:'justify'}}>Our dedicated support team is available 24/7 to address any security concerns or issues you may encounter. Whether it's a technical problem with your security system or an urgent security threat, we are here to provide immediate assistance and support.</p>
						</FeatureCard>
					</div>
				</div>
			</div>
		</div>

		<div className="container mt-5">
			<h2 className="text-center mb-4">Travel Safety Tips</h2>
			<div className="row">
				<div className="col-md-6 mb-4">
					<div className="card h-100">
						<img src="images/s1.jpg" className="card-img-top" alt="..." style={{height:'325px'}}/>
						<div className="card-body">
						<h5 className="card-title text-success">Research Your Destination</h5>
						<p className="card-text" style={{textAlign:'justify'}}>Before you travel, research your destination thoroughly. Learn about the local laws, customs, and potential safety risks. Understanding the culture and environment will help you stay safe and avoid unnecessary risks.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 mb-4">
					<div className="card h-100">
						<img src="images/s2.jpg" className="card-img-top" alt="..." style={{height:'325px'}}/>
						<div className="card-body">
						<h5 className="card-title text-success">Stay Aware of Your Surroundings</h5>
						<p className="card-text" style={{textAlign:'justify'}}>When traveling, always stay aware of your surroundings. Be observant and alert to any potential threats or dangers. Avoid walking alone at night in unfamiliar areas, and trust your instincts if you feel unsafe.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 mb-4">
					<div className="card h-100">
						<img src="images/s3.jpg" className="card-img-top" alt="..." style={{height:'325px'}} />
						<div className="card-body">
						<h5 className="card-title text-success">Secure Your Belongings</h5>
						<p className="card-text" style={{textAlign:'justify'}}>Keep your belongings secure at all times. Use a money belt or hidden pouch to carry valuables, and avoid flashing expensive items such as jewelry or electronics. Be cautious of pickpockets and keep your bags close to you in crowded areas.</p>
						</div>
					</div>
				</div>
				<div className="col-md-6 mb-4">
					<div className="card h-100">
						<img src="images/s4.jpg" className="card-img-top" alt="..." style={{height:'325px'}}/>
						<div className="card-body">
						<h5 className="card-title text-success">Stay Connected</h5>
						<p className="card-text" style={{textAlign:'justify'}}>Stay connected with friends, family, or travel companions while traveling. Share your itinerary and check in regularly. Having a support network can provide reassurance and assistance in case of emergencies.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

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
		{/* <Sos/> */}

	</>
  );
}





function FeatureCard({ icon, title, children }) {
	const iconToSymbol = {
		"flaticon-policeman": "👮",
		"flaticon-bodyguard": "💂",
		"flaticon-approved": "✔️",
		"flaticon-medal": "🎖️",
		"flaticon-helmet": "⛑️",
		"flaticon-surveillance": "👁️‍🗨️",
	  };
  return (
    <div className="col-md-6 mb-4">
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center mb-3">
          <h3 className={`font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3 ${icon}`} style={{ width: "45px", height: "45px" }}>{iconToSymbol[icon]}</h3>
          <h6 className="text-truncate m-0 text-success">{title}</h6>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Userhome;
	  

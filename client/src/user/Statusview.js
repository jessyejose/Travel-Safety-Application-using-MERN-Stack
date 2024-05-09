import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sos from './Sos';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Statusview() {
  const [formData, setFormData] = useState([]);

const [loading, setLoading] = useState(true);
const navigate = useNavigate();

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
				const response = await axios.get('/auth/formvalid');
				const filteredFormData = response.data.data.filter(form => {
					return form.userId === res.data.data._id 
				});
				setFormData(filteredFormData.reverse());
			} else {
				navigate('/login');
			}
			setLoading(false);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	fetchData();
}, [formData]);

  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h2 style={{ color: '#001E93' }}>CIR Form Status</h2>
      </div>
	  <div className="form-container">
	  {loading ? (
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden mt-6 pt-6">Loading...</span>
			</div>
			) : (
				<>
					{formData.length <= 0 ? (
						<div style={{ textAlign: 'center', padding: '20px', background: '#f8d7da', color: '#721c24', borderRadius: '10px', border: '2px solid #f5c6cb', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
							<p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>No CIR form has been submitted by the user</p>
							<p style={{ fontSize: '16px', color: '#721c24' }}>Please submit a form through the CIR form page.</p>
						</div>
					) : (
						formData.map((form) => (
							<div key={form._id} className="form-item">
								<div className="form-content-left">
									<p><strong style={{display:'inline-block',width:'150px'}}>Name</strong>: {form.name}</p>
									<p><strong style={{display:'inline-block',width:'150px'}}>Address</strong>: {form.address}</p>
									<p><strong style={{display:'inline-block',width:'150px'}}>Phone Number</strong>: {form.phoneNumber}</p>
									<p><strong style={{display:'inline-block',width:'150px'}}>Age</strong>: {form.age}</p>
									<p><strong style={{display:'inline-block',width:'150px'}}>Source Station</strong>: {form.sourceStation}</p>
									<p><strong style={{display:'inline-block',width:'150px'}}>Destination Station</strong>: {form.destinationStation}</p>
									<p><strong style={{display:'inline-block',width:'150px'}}>Travel Date</strong>: {new Date(form.travelDate).toLocaleDateString()}</p>
									<p><strong style={{display:'inline-block',width:'150px'}}>Travel Time</strong>: {form.travelTime}</p>
									<p><strong style={{display:'inline-block',width:'150px'}}>Return Date</strong>: {new Date(form.returnDate).toLocaleDateString()}</p>
									<p><strong style={{display:'inline-block',width:'150px'}}>Return Time</strong>: {form.returnTime}</p>
								</div>
								<div className="form-content-right">
									<p><strong style={{display:'inline-block',width:'120px'}}>Travel Reason</strong>: {form.travelReason}</p>
									<p ><strong style={{ display: 'inline-block',width:'120px' }} >Image</strong>: <img src={form.photo} className="rounded-circle" alt="Photo" width='150px' height='150px' /></p>
									<p ><strong style={{ display: 'inline-block',width:'120px' }}>Signature</strong>: <img src={form.signature} alt="Signature" width='150px' height='150px' /></p>
									<p>
										<strong style={{ display: 'inline-block', width: '120px' }}>Approval Status</strong>: 
										{form.approvalStatus === undefined && <span style={{ color: 'orange' }}> Pending</span>}
										{form.approvalStatus === 1 && <span style={{ color: 'green' }}> Approved</span>}
										{form.approvalStatus === 0 && <span style={{ color: 'red' }}> Rejected</span>}
									</p>
								</div>
							</div>
						))
					)}
				</>
			)}
		</div>

      {/* <Sos /> */}
    </>
  );
}

export default Statusview;

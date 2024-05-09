import React, { useEffect, useState } from 'react';
import Policenavbar from './Policenavbar';
import axios from 'axios';
import Policealert from './Policealert';

function Policehistory() {
	const [formData, setFormData] = useState([]);
	const [loading, setLoading] = useState(true);
    const token = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/auth/formvalid');

                const filteredFormData = response.data.data.filter(form => {
					return (form.sourceStation === token.location || form.destinationStation === token.location) && form.approvalStatus === 1 && ((form.tripStatus === 1 && form.status !== 0) || form.status === 0 )

				});
				
                setFormData(filteredFormData);
				// console.log(filteredFormData)
				setLoading(false);
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        };

        fetchData();
    }, [formData]);

	if (loading) {
        return (
            <div style={{ textAlign: 'center', marginTop: '250px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
  return (
	<>
	<Policenavbar/>
	<div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h2 style={{ color: '#001E93' }}>Trip History</h2>
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
                <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>No trip history found.</p>
                <p style={{ fontSize: '16px', color: '#721c24' }}>Check back later for updates.</p>
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
				  	<p><strong style={{display:'inline-block',width:'110px'}}>Travel Reason</strong>: {form.travelReason}</p>
					<p ><strong style={{ display: 'inline-block',width:'110px' }} >Image</strong>: <img src={form.photo} className="rounded-circle" alt="Photo" width='150px' height='150px' /></p>
					<p ><strong style={{ display: 'inline-block',width:'110px' }}>Signature</strong>: <img src={form.signature} alt="Signature" width='150px' height='150px' /></p>
                    <p>
                      <strong style={{ display: 'inline-block', width: '110px' }}>Trip Status</strong>:
                      { form.status === 0 && <span style={{ color: 'green' }}>Rescued Successfully by {form.alertData} Police Station </span>}
					  {form.tripStatus === 1 && form.status !== 0 && <span style={{ color: 'green' }}>Reached Destination</span>}


                    </p>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
		<Policealert/>

	  
	</>
  )
}

export default Policehistory

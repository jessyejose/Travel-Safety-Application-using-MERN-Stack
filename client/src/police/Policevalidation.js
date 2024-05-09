import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Policenavbar from './Policenavbar';
import Policealert from './Policealert';

function Policevalidation() {
    const [formData, setFormData] = useState([]);
    const token = JSON.parse(localStorage.getItem('userInfo'));
	const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/auth/formvalid');
                const filteredFormData = response.data.data.filter(form => form.sourceStation === token.location);
                setFormData(filteredFormData.reverse()); // Reverse the array before setting state
				setLoading(false);
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        };

        fetchData();
    }, [token]);

    const handleApprove = async (formId) => {
        try {
            await axios.post('/auth/approveTrip', { formId });
            setFormData(prevData => prevData.map(form => {
                if (form._id === formId) {
                    return { ...form, approvalStatus: 1 };
                }
                return form;
            }));
        } catch (error) {
            console.error('Error approving trip:', error);
        }
    };

    const handleReject = async (formId) => {
        try {
            await axios.post('/auth/rejectTrip', { formId });
            setFormData(prevData => prevData.map(form => {
                if (form._id === formId) {
                    return { ...form, approvalStatus: 0 };
                }
                return form;
            }));
        } catch (error) {
            console.error('Error rejecting trip:', error);
        }
    };
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
		<div style={{ backgroundColor: '#FFF7F1', minHeight: '100vh' }}>
            <Policenavbar />
            <div className="form-container mt-4" >
				{formData.length <= 0 ? (
					<div style={{ textAlign: 'center', padding: '20px', background: '#f8d7da', color: '#721c24', borderRadius: '10px', border: '2px solid #f5c6cb', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',marginTop:'250px' }}>
						<p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>No trip for validation available</p>
						<p style={{ fontSize: '16px', color: '#721c24' }}>Check back later for updates.</p>
					</div>
                ) : (
                    formData.map(form => (
                    <div key={form._id} className="form-item">
                        <div className="form-content-left">
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Name</strong>: {form.name}</p>
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Address</strong>: {form.address}</p>
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Phone Number</strong>: {form.phoneNumber}</p>
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Age</strong>: {form.age}</p>
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Source Station</strong>: {form.sourceStation}</p>
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Destination Station</strong>: {form.destinationStation}</p>
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Travel Date</strong>: {new Date(form.travelDate).toLocaleDateString()}</p>
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Travel Time</strong>: {form.travelTime}</p>
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Return Date</strong>: {new Date(form.returnDate).toLocaleDateString()}</p>
                            <p><strong style={{ display: 'inline-block', width: '150px' }}>Return Time</strong>: {form.returnTime}</p>
                        </div>
                        <div className="form-content-right">
                            <p><strong style={{ display: 'inline-block', width: '110px' }}>Travel Reason</strong>: {form.travelReason}</p>
                            <p><strong style={{ display: 'inline-block', width: '110px' }}>Image</strong>: <img src={form.photo} className="rounded-circle" alt="Photo" width='150px' height='150px' /></p>
                            <p><strong style={{ display: 'inline-block', width: '110px' }}>Signature</strong>: <img src={form.signature} alt="Signature" width='150px' height='150px' /></p>
                            {form.approvalStatus === undefined && (
                                <div>
                                    <button style={{ marginRight: '10px', marginBottom: '10px', padding: '8px 16px', borderRadius: '5px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none' }} onClick={() => handleApprove(form._id)}>Approve</button>
                                    <button style={{ marginBottom: '10px', padding: '8px 16px', borderRadius: '5px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', backgroundColor: '#f44336', color: 'white', border: 'none' }} onClick={() => handleReject(form._id)}>Reject</button>
                                </div>
                            )}
                            {form.approvalStatus === 1 && <p ><strong style={{ display: 'inline-block', width: '110px' }}>Approval Status</strong>: <span className='text-success'>Approved</span></p>}
                            {form.approvalStatus === 0 && <p><strong style={{ display: 'inline-block', width: '110px' }}>Approval Status</strong>: <span className='text-danger'>Rejected</span></p>}
                        </div>
                    </div>
                )))}
			
            </div>
		</div>
		<Policealert/>

        </>
    );
}

export default Policevalidation;

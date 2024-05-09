import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Sos from './Sos';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Form() {
	const navigate=useNavigate()
	const [data, setdata] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    age: '',
    sourceStation: '',
    destinationStation: '',
    travelReason: '',
    travelDate: '',
    travelTime: '',
    returnDate: '',
    returnTime: '',
    photo: null,
    signature: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
	const userId = data._id;
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
	formDataToSend.append('userId', userId);
    try {
      await axios.post('/auth/submit', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
		toast.success("Form submitted successfully!", {
			position: "top-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			onClose:()=>{
				navigate('/statusview')
			}
		});
		
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  const loaddata = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('data'));
      const res = await axios.get('/auth/userdata', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        setdata(res.data.data);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loaddata();
  }, []);


  return (
	<>
	<Navbar/>
    <section className="user_form_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="user_form_detail">
              <h2 className='text-primary'style={{marginBottom:'50px'}}>CIR Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>Name:</label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="address" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>Address:</label>
                  <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>Phone Number:</label>
                  <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="age">Age:</label>
                  <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="sourceStation">Source Station:</label>
                  <input type="text" className="form-control" id="sourceStation" name="sourceStation" value={formData.sourceStation} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="destinationStation">Destination Station:</label>
                  <input type="text" className="form-control" id="destinationStation" name="destinationStation" value={formData.destinationStation} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="travelReason">Travel Reason:</label>
                  <input type="text" className="form-control" id="travelReason" name="travelReason" value={formData.travelReason} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="travelDate">Travel Date:</label>
                  <input type="date" className="form-control" id="travelDate" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="travelTime">Travel Time:</label>
                  <input type="time" className="form-control" id="travelTime" name="travelTime" value={formData.travelTime} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="returnDate">Return Date:</label>
                  <input type="date" className="form-control" id="returnDate" name="returnDate" value={formData.returnDate} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="returnTime">Return Time:</label>
                  <input type="time" className="form-control" id="returnTime" name="returnTime" value={formData.returnTime} onChange={handleChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="photo">Photo:</label>
                  <input type="file" className="form-control" id="photo" name="photo" onChange={handleFileChange} required />
                </div>
                <div className="form-group" style={{fontSize:'20px',fontStyle:'italic',color:'darkblue',fontWeight:'50px'}}>
                  <label htmlFor="signature">Signature:</label>
                  <input type="file" className="form-control" id="signature" name="signature" onChange={handleFileChange} required />
                </div>
				<div className='text-center'>
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
	{/* <Sos/> */}
	<ToastContainer/>
	</>
  );
}

export default Form;

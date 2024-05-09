import React,{useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Adminadd() {
	const navigate=useNavigate()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		location: '',
		headPoliceName: '',
		description: '',
		status: 1,
		headPoliceImage: null,
		policeStationImage: null
	  });
	
	  const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	  };
	
	  const handleImageChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.files[0] });
	  };
	
	  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  const formDataToSend = new FormData();
		  for (const key in formData) {
			formDataToSend.append(key, formData[key]);
		  }
		  await axios.post('/auth/policestation', formDataToSend, {
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
				navigate('/policeview')
			}
		});
		  setFormData({
			name: '',
			email: '',
			password: '',
			location: '',
			headPoliceName: '',
			description: '',
			status: 1,
			headPoliceImage: null,
			policeStationImage: null
		  });
		} catch (error) {
		  console.error('Error adding police station details:', error);
		  alert('Error adding police station details. Please try again.');
		}
	  };
	
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
			<div style={{ width: '100%' }}>
				<h2 className='mt-2'>Add Police Station Details</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
					<label>Name:</label>
					<input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
					</div>
					<div className="form-group">
					<label>Email:</label>
					<input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
					</div>
					<div className="form-group">
					<label>Password:</label>
					<input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
					</div>
					<div className="form-group">
					<label>Location:</label>
					<input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} required />
					</div>
					<div className="form-group">
					<label>Head Police Name:</label>
					<input type="text" className="form-control" name="headPoliceName" value={formData.headPoliceName} onChange={handleChange} required />
					</div>
					<div className="form-group">
  					<label>Description:</label>
                    <input type="text" className="form-control" name="description" value={formData.description} onChange={handleChange} required />
					</div>
					<div className="form-group">
					<label>Head Police Image:</label>
					<input type="file" className="form-control" name="headPoliceImage" onChange={handleImageChange} required />
					</div>			
					<div className="form-group">
					<label htmlFor="policeStationImage">Police Station Image:</label>
					<input type="file" className="form-control" name="policeStationImage" onChange={handleImageChange} required />
					</div>
					<div className='text-center'><button type="submit" className="btn btn-primary">Submit</button></div>
					
				</form>
			</div>
          </div>
        </div>
      </div>
	  <ToastContainer/>
    </>
  );
}

export default Adminadd;

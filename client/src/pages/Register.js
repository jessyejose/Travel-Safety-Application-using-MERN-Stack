import React from 'react'
import { Link } from 'react-router-dom';
import {useForm } from "react-hook-form";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	  } = useForm();

	const registersubmit = async (data,event) => {
		event.preventDefault();
		if (data.password === data.cpassword) {
			const userData = {
				user: data.user,
				email: data.email,
				password: data.password
			};
			await axios.post("auth/register", userData)
				.then(log => {
					if (log.data.success) {
						toast.success(log.data.msg, {
							position: "top-right",
							autoClose: 3000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "light",
						});
					} else {
						toast.error(log.data.msg, {
							position: "top-right",
							autoClose: 1000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "light",
						});
					}
					reset()
				})
				.catch(err => {
					alert(err);
				});
		} else {
			toast.error("Passwords doesn't match", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};
	
  return (
	<div className='row bgcolor py-2' style={{ backgroundImage: "url('/reg.webp')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
		<h2 className='text-white text-center pb-1'>Ay! User Register Here</h2>
		<div className='col-md-5 mx-auto px-2 py-2 mt-2 ' > 
			<div className='card p3 ' 
			style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(1px)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}
			>
				<h2 className='pt-2 px-2 App' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '2.5rem', lineHeight: '1.5',color:'black' }}>REGISTER</h2>
				<form onSubmit={handleSubmit(registersubmit)} className='mt-2 mx-4'>
					<div className='form-group'>
						<h5 style={{fontSize:"1.5rem",color:'black'}}><b>Name</b></h5>
						<input type='text' className='form-control' placeholder='Enter Name' required autoFocus {...register("user",{required:true,minLength:3})}/>
						{errors.user && <p className=' mt-1' style={{fontSize:"1.1rem",color:'#FE0000'}}><b>Name should be of atleast 3 characters</b></p>}
					</div>
					<div className='form-group mt-2'>
						<h5 style={{fontSize:"1.5rem",color:'black'}}><b>Email Address</b></h5>
						<input type='email' className='form-control' placeholder='Enter Email' required autoFocus  {...register("email",{required:true,pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}/>
						{errors.email && <p className=' mt-1' style={{fontSize:"1.1rem",color:'#FE0000'}}><b>Please check and enter correct email</b></p>}
					</div>
					<div className='form-group mt-2'>
						<h5 style={{fontSize:"1.5rem",color:'black'}}><b> Password</b></h5>
						<input type='password' className='form-control' placeholder='Enter Password' required {...register("password",{required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{4,}$/})}/>
						{errors.password && <p className=' mt-1' style={{fontSize:"1.1rem",color:'#FE0000'}}><b> Password should requires atleast one lowercase, uppercase, number and special character</b></p>}
					</div>
					<div className='form-group mt-2'>
						<h5 style={{fontSize:"1.5rem",color:'black'}}><b>Confirm Password</b></h5>
						<input type='password' className='form-control' placeholder='Enter Confirm Password' required {...register("cpassword",{required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{4,}$/})}/>
						{errors.cpassword && <p className=' mt-1' style={{fontSize:"1.1rem",color:'#FE0000'}}><b> Password should requires atleast one lowercase, uppercase, number and special character</b></p>}
					</div>
					<div className='text-center mt-2 ' >
						<button type='submit' className='mt-1.5 submit-btn'>Submit</button>
					</div>
				</form>
				<p className=" text-center my-3"><span style={{fontSize:"1rem",color:'black'}}><b>Already Registered?</b></span><Link className=" text-center my-3" to="/login"><b style={{color:'darkblue'}}> Click here</b></Link></p>
			</div>
		</div>

		<ToastContainer/>
	</div>

  )
}

export default Register

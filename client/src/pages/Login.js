import React,{useState} from 'react'
import '../App.css';
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
	const loginsubmit=async(e)=>{
		e.preventDefault()
		const userData={
			email,password
		}
		try {
			await axios.post("/auth/login",userData)
			.then(log=>{
				if(log.data.success){
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
					localStorage.setItem("data",JSON.stringify(log.data.token))
					// console.log(log.data.token)
					navigate('/userhome')
				}else{
					toast.error(log.data.msg, {
						position: "top-right",
						autoClose: 1500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
					});
				}
			})
		} catch (error) {
			console.log(error);
		}


	}
  return (
	<>
		<div className='row bgcolor py-2' style={{ backgroundImage: "url('/log.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
		<h2 className=' text-center pb-1 mt-4' style={{color:'blueviolet'}}>Ay! User Welcome Back</h2>
		<div className='col-md-5 mx-auto px-2 py-2 mt-2 ' > 
			<div className='card p3 ' 
			style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10upx)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}
			>
				<h2 className='pt-2 px-2 App' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '2.5rem', lineHeight: '1.5',color:'black' }}>LOGIN</h2>
					<form onSubmit={loginsubmit} className='mt-5 mx-4'>
					<div className='form-group'>
						<h5>Email Address</h5>
						<input type='email' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required autoFocus/>
					</div>
					<div className='form-group mt-4'>
						<h5>Password</h5>
						<input type='password' value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required/>
					</div>
					<div className='text-center'>
						<button type='submit' className='mt-5 submit-btn'>Submit</button>
					</div>
				</form>
				<p className=" text-center my-3">Not Registered?<Link className="text-primary text-center my-3" to="/register"> Click here</Link></p>

			</div>

		</div>
		<ToastContainer/>
	</div>

	</>

  )
}

export default Login

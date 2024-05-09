import React,{useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Verifyemail() {
	const params=useParams()

	const tokenverify=async ()=>{
		try {
			const res =await axios.post('/auth/verifymail',{token:params.token})
			if(res.data.success){
				toast.success(res.data.msg, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				setTimeout(()=>{
					window.close()
				},3000)
			}else{
				toast.error(res.data.msg, {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				setTimeout(()=>{
					window.close()
				},3000)
			}
			
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(()=>{
		tokenverify()
	},[])

  return (
	<div className='d-flex align-items-center justify-content-center vh-100'>
		<div className='mx-auto'>
			<Link className='btn btn-primary' to='/login'>Go to login page</Link>
			<ToastContainer/>
		</div>
	</div>

  )
}

export default Verifyemail

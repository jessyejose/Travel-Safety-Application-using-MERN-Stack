import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Policelogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/auth/policelogin', formData);
			if (response.data.success) {
				const userInfo = response.data.userInfo;
				if (userInfo.userType === 'admin') {
				localStorage.setItem('admin', JSON.stringify(userInfo));

					navigate('/adminhome');
				} else if (userInfo.userType === 'police') {
				localStorage.setItem('userInfo', JSON.stringify(userInfo));
					navigate('/policehome');
				}
			} else {
				alert(response.data.msg);
			}
		} catch (error) {
			console.error('Error logging in:', error);
			alert('Error logging in. Please try again.');
		}
	};
	

    return (
        <>
            <div className="container-login" style={{ backgroundImage: "url('images/pl.avif')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
                <div className="row justify-content-center" style={{ paddingTop: '150px' }}>
                    <div className="col-xl-6 col-lg-12 col-md-9">
                        <div className="card shadow-sm my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="login-form">
                                            <div className="text-center">
                                                <h3 className=" text-gray-900 mb-4 text-primary" style={{ color: 'blueviolet' }}>LOGIN</h3>
                                            </div>
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email" id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address" value={formData.email} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" name="password" id="exampleInputPassword" placeholder="Password"
                                                        value={formData.password} onChange={handleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                                </div>
                                                <hr />
                                            </form>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Policelogin;

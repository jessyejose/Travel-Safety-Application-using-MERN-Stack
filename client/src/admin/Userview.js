import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';

function Userview() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/auth/alluser');
                setUsers(response.data.data.reverse());
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    const getRandomColor = () => {
        const letters = '89ABCDEF'; 
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * letters.length)];
		}
		return color;
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
                        <div className="container mt-5">
							<h2 className='text-center text-primary'><b>Our User</b></h2><br/>
                            <div className="row">
                                {users.map((user, index) => (
                                    <div className="col-md-4 mb-4" key={index}>
                                        <div
                                            className="card p-4"
                                            style={{
                                                backgroundColor: getRandomColor(),
                                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                                                borderRadius: '10px',
												marginLeft:'30px'
                                            }}
                                        >
                                            <h5 className="card-title">👤 {user.user}</h5>
                                            <p className="card-text">📧 {user.email}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Userview;

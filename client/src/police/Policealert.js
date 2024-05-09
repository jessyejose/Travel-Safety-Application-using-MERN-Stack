import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Policealert() {
    const [alertTrips, setAlertTrips] = useState([]);
    const [displayAlert, setDisplayAlert] = useState(false);
    const token = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/auth/formvalid');
                const filteredFormData = response.data.data.filter(form => {
                    return form.alertData === token.location && form.status === undefined;
                });
				// console.log(response.data.data)
                setAlertTrips(filteredFormData);
				// console.log(token.location)
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        };

        fetchData();
    }, [alertTrips]);

    useEffect(() => {
        if (alertTrips.length > 0) {
            const currentAlertTime = new Date(alertTrips[0].alertTime);
            const currentTime = new Date();
            const timeDiffMilliseconds = currentTime.getTime() - currentAlertTime.getTime();
            const timeDiffMinutes = timeDiffMilliseconds / (1000 * 60);			
            if (timeDiffMinutes >= 0 && timeDiffMinutes <= 25) {
                setDisplayAlert(true);
            } else {
                setDisplayAlert(false);
            }

        }
    }, [alertTrips]);

	

    const handleSave = async () => {
        try {
            const userId = alertTrips[0]._id;
            await axios.post('http://localhost:5000/auth/submitalerts', {
                userId: userId,
                status: 0,
				policeId:token._id
            });
			console.log('Alert saved successfully');
			setDisplayAlert(false)
        	setAlertTrips([]);
        } catch (error) {
            console.error('Error saving SOS request:', error);
        }
    };

    return (
        <>
            {displayAlert && (
                <div style={styles.alert}>
                    <h4>Emergency</h4>
                    {alertTrips.length > 0 && (
                        <div>
                            <p style={styles.dangerText}>{alertTrips[0].name} is in danger</p>
                            <button onClick={handleSave} style={styles.button} >Save {alertTrips[0].name}</button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

const styles = {
    alert: {
        position: 'fixed',
        top: '70px',
        right: 0,
        color: 'red',
        padding: '10px',
        fontWeight: 'bold',
        zIndex: 9999,
        borderRadius: '5px',
        border: '2px solid red'
    },
    dangerText: {
        color: 'orange'
    },
    button: {
        color: 'white',
        border: 'none',
        backgroundColor: 'orange',
        borderRadius: '5px',
    }
};

export default Policealert;

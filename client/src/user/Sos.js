import React from 'react';

function Sos({  displayCoordinates }) {
    const handleClick = () => {
        
        displayCoordinates(); 
    };

    return (
        <button
            className="btn btn-danger"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: '9999',
            }}
            onClick={handleClick}
        >
            SOS
        </button>
    );
}

export default Sos;
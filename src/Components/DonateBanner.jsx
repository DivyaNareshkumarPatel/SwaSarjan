import React from 'react';
import image3 from '../images/image3.png';
import { Typography } from '@mui/material';
import WhiteLogo from '../images/Swa Icon Name White.png';

const DonateBanner = () => {
    return (
        <div
            style={{
                maxWidth: '100%', // Set maximum width to ensure responsiveness
                margin: '20px',
                position: 'relative',
                borderRadius: '10px',
                overflow: 'hidden', // Hide overflow to prevent blurred image from overflowing
            }}
        >
            <img
                src={image3}
                alt="Background"
                style={{
                    width: '100%', // Make the image responsive
                    height: 'auto', // Ensure aspect ratio is maintained
                    objectFit: 'cover',
                    filter: 'blur(0.1px) brightness(0.8)',
                    borderRadius: '10px',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    padding: '10px',
                }}
            >
                <img src={WhiteLogo} alt="Logo" style={{ width: '50px', marginBottom: '10px' }} /> {/* Adjust width and add margin */}
                <Typography variant="h6" style={{ color: 'white' }}>
                    We Can Save The Future
                </Typography>
            </div>
        </div>
    );
};

export default DonateBanner;

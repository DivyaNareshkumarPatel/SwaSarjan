import React from 'react';
import image3 from '../images/image3.png';
import { Typography } from '@mui/material';
import WhiteLogo from '../images/Swa Icon Name White.png';

const DonateBanner = () => {
    return (
        <div
            style={{
                maxWidth: '100%',
                margin: '20px',
                height: '500px',
                position: 'relative',
                borderRadius: '10px',
                overflow: 'hidden',
            }}
        >
            <img
                src={image3}
                alt="Background"
                style={{
                    width: '',
                    height: '',
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
                    zIndex: '10',
                }}
            >
                <img src={WhiteLogo} alt="Logo" style={{ width: '50px', marginBottom: '10px' }} />
                <Typography variant="h6" style={{ color: 'white' }}>
                    We Can Save The Future
                </Typography>
            </div>
        </div>
    );
};

export default DonateBanner;

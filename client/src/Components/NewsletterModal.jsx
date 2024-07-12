import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const NewsletterModal = ({ open, handleClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email submitted:', email);
    handleClose(); 
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2" gutterBottom>
          Subscribe to our Newsletter
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
                marginBottom:'20px'
            }}
          />
          <Button type="submit" variant="contained"  fullWidth
          style={{
            background:'#F26522',
            marginTop:'10px'
          }}>
            Subscribe
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: '10px 10px 50px rgba(0, 0, 0, 0.55)', 
  borderRadius: '10px', 
  outline: 'none', 
  p: 4,
};

export default NewsletterModal;

import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Snackbar, SnackbarContent } from '@mui/material';
import ErrorIcon from "@mui/icons-material/Error";

import { API } from '../service/api';

const NewsletterModal = ({ open, handleClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!emailPattern.test(email)) {
        setError('Please enter a valid email address.');
      } else {
        const formData = new FormData();
        formData.append('email', email);

        const response = await API.newsLetter(formData);
        console.log(response);
        if (response.isSuccess) {
          console.log('Email submitted:', email);
          setSuccessMessage('Subscription Successful!');
          setOpenSnackbar(true);
          setEmail(''); 
          setError('');
          setTimeout(() => {
            handleClose();
          }, 3000);
        } else {
          if (response.status === 409) {
            setError('Email already in use. Please enter a different email.');
          } else {
            setError('Something went wrong. Please try again later.');
          }
          console.error('Error:', response.status);
        }
      }
    } catch (error) {
      setError('Email already in use or something went wrong. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <SnackbarContent
          message={successMessage}
          style={{
            backgroundColor: 'green',
            color: 'white'
          }}
        />
      </Snackbar>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Subscribe to our Newsletter
          </Typography>
          {error && (
            <div
              style={{
                color: 'white',
                background: '#FF7F7F',
                marginBottom: '15px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px',
              }}
            >
              <ErrorIcon sx={{ marginRight: '5px' }} />
              <span>{error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              label='Email Address'
              variant='outlined'
              fullWidth
              margin='normal'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                marginBottom: '20px',
              }}
            />
            <Button
              type='submit'
              variant='contained'
              fullWidth
              style={{
                background: '#F26522',
                marginTop: '10px',
              }}
            >
              Subscribe
            </Button>
          </form>
        </Box>
      </Modal>
    </>
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

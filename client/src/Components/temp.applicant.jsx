//  as of now in use because payment issue arrived so it sends the email and stores in database




import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Snackbar, SnackbarContent } from '@mui/material';
import ErrorIcon from "@mui/icons-material/Error";

import { API } from '../service/api';

const TempApplicant = ({ open, handleClose }) => {
  const msg=''
  const [email, setEmail] = useState('');
  const [detail, setDetail] = useState({
    fullName: "",
    city: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  var phonePattern = /^\d{10}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')

    try {
      if (
        !detail.fullName ||
        !detail.city ||
        !detail.email ||
        !detail.phone){

          setError('Please fill in all fields.');
        }
      else if (!phonePattern.test(detail.phone)) {
        setError("Please enter a valid phone number.");
      }
       else if (!emailPattern.test(detail.email)) {
        setError('Please enter a valid email address.');
        } else {

          console.log(detail)
          console.log(`calling api from here`)
          const response = await API.tempAplication(detail);
          console.log(`called api and got response ${response}`)
        
        if (response.isSuccess) {
          console.log('Email submitted:', detail);
          setSuccessMessage('Applied Successfully!');
          setOpenSnackbar(true);
          setEmail(''); 
          setError('');
          setTimeout(() => {
            handleClose();
          }, 3000);
        } else {
          if (response.isError) {
             msg = response.msg
            setError(`${msg}`);
          } else {
            setError('Something went wrong. Please try again later.');
          }
          console.error('Error:', response.status);
        }
      }
    } catch (error) {
      setError(`Phone number already registered or Something went wrong.`);
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
            Apply to join SwaSarjan
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
              label='Full Name'
              variant='outlined'
              fullWidth
              margin='normal'
              name='fullName'
              value={detail.fullName}
              onChange={handleChange}
              style={{
                marginBottom: '20px',
              }}
            />
            <TextField
              label='Current City'
              variant='outlined'
              fullWidth
              margin='normal'
              name='city'
              value={detail.city}
              onChange={handleChange}
              style={{
                marginBottom: '20px',
              }}
            />
            <TextField
              label='Phone Number'
              variant='outlined'
              fullWidth
              margin='normal'
              name='phone'
              value={detail.phone}
              onChange={handleChange}
              style={{
                marginBottom: '20px',
              }}
            />
            <TextField
              label='Email Address'
              variant='outlined'
              fullWidth
              margin='normal'
              name='email'
              value={detail.email}
              onChange={handleChange}
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
              Apply
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

export default TempApplicant;

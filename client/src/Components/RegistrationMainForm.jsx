import React, { useState } from "react";
import { Box, Button, Typography, RadioGroup, Radio, FormControlLabel, Snackbar } from "@mui/material";
import { styled, useMediaQuery } from "@mui/system";
import { Link } from "react-router-dom";
import OrangeLogo from '../images/Swa Icon Name Orange.png';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { API } from "../service/api";

const InputStyle = styled("input")(({ isMedium }) => ({
  width: isMedium ? "100%" : "365px",
  margin: "10px 80px",
  height: "auto",
  borderRadius: "50px",
  border: "1px solid #CDCFD0",
  padding: "5px",
  "&::placeholder": {
    color: "#CDCFD0",
  },
}));

const Row = styled(Box)(({ isMedium }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "space-around",
  alignItems: "center",
  margin: "0px 10px",
  flexDirection: isMedium ? "column" : "row",
}));

const RegistrationMainForm = () => {
  const isMedium = useMediaQuery("(max-width:800px)");

  const [detail, setDetail] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    phone: "",
    otp: "",
    dob: "",
    addr: "",
    state: "",
    city: "",
    pinCode: "",
    panCard: "",
    adharCard: "",
    gender:""
  });

  // const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value
    }));
  };

  // const handleGenderChange = (e) => {
  //   setGender(e.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !detail.name ||
      !detail.userName ||
      !detail.email ||
      !detail.password ||
      !detail.phone ||
      !detail.otp ||
      !detail.dob ||
      !detail.addr ||
      !detail.state ||
      !detail.city ||
      !detail.pinCode ||
      !detail.panCard ||
      !detail.adharCard ||
      !detail.gender 
      
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (detail.name.length < 3) {
      setError("Please enter a valid first name.");
      return;
    }
    if (detail.userName.length < 3) {
      setError("Please enter a valid last name.");
      return;
    }
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(detail.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(detail.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    console.log("Form submitted:");
    setError("");
    setOpenSnackbar(true);
    console.log(detail);
    // console.log(gender);
  };

  const signupUser = async () => {
     let response = await API.userSignup(detail);
     console.log(`api called from the registration`)
  }

  return (
    <div
      style={{
        display: "flex",
        height: isMedium ? 'auto' : '100vh',
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 40px",
        flexDirection: "column",
      }}
    >
      <div>
        <div style={{
          display: 'flex',
          justifyContent: isMedium ? 'center' : 'flex-start',
          textAlign: 'left'
        }}>
          <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Details sent successfully Click next"
      />
          <div>
            <Link to='/'>
              <img
                src={OrangeLogo}
                style={{
                  height: '50px',
                  width: '40px',
                  margin: '0px 60px 0px 10px'
                }}
              />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: '20px'
            }}
          >
            <Typography variant="h5" style={{ textAlign: 'left' }}>Register your Account</Typography>
            <Typography variant="h7">
              Register Yourself & let’s get started with SwaSarjan
            </Typography>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <Row isMedium={isMedium}>
            <InputStyle type="text" name="name" value={detail.name} onChange={handleChange} placeholder="Name" />
            <InputStyle type="text" name="userName" value={detail.userName} onChange={handleChange} placeholder="Username" />
          </Row>
          <Row isMedium={isMedium}>
            <InputStyle type="text" name="email" value={detail.email} onChange={handleChange} placeholder="Email" />
            <InputStyle type="password" name="password" value={detail.password} onChange={handleChange} placeholder="Password" />
          </Row>
          <Row isMedium={isMedium}>
            <InputStyle type="text" name="phone" value={detail.phone} onChange={handleChange} placeholder="Mobile no." />
            <InputStyle type="text" name="otp" value={detail.otp} onChange={handleChange} placeholder="OTP" />
          </Row>
          <Row isMedium={isMedium}>
            <InputStyle type="date" name="dob" value={detail.dob} onChange={handleChange} placeholder="DOB" />
            <RadioGroup
              name="gender"
              value={detail.gender}
              onChange={handleChange}
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 80px' }}
            >
              <Typography variant="body1" style={{ marginRight: '10px' }}>Gender:</Typography>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </Row>
          <Row isMedium={isMedium}>
            <InputStyle type="text" name="addr" value={detail.addr} onChange={handleChange} placeholder="Address" />
            <InputStyle type="text" name="state" value={detail.state} onChange={handleChange} placeholder="State" />
          </Row>
          <Row isMedium={isMedium}>
            <InputStyle type="text" name="city" value={detail.city} onChange={handleChange} placeholder="City" />
            <InputStyle type="text" name="pinCode" value={detail.pinCode} onChange={handleChange} placeholder="Pin Code" />
          </Row>
          <Row isMedium={isMedium}>
            <InputStyle type="text" name="panCard" value={detail.panCard} onChange={handleChange} placeholder="Pan Card" />
            <InputStyle type="text" name="adharCard" value={detail.adharCard} onChange={handleChange} placeholder="Adhar Card" />
          </Row>
          <Row isMedium={isMedium}>
            <label style={{ margin: '10px 80px' }}>Photo</label>
            <InputStyle type="file" name="photo" />
          </Row>
          <Row isMedium={isMedium}>
            <label style={{ margin: '10px 80px' }}>Signature</label>
            <InputStyle type="file" name="signature" />
          </Row>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '30px'
            }}
          >
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" onClick={() => signupUser()} style={{color:'black'}}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationMainForm;

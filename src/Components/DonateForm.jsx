import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import OrangeLogo from '../images/Swa Icon Name Orange.png';
import {
  Typography,
  Button,
  styled,
  Radio,
  Snackbar,
} from "@mui/material";

import ErrorIcon from "@mui/icons-material/Error";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function DonateForm() {
  const isMedium = useMediaQuery("(max-width:807px)");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

//   const handleLogin = (event) => {
//     event.preventDefault();
//     if (username === "") {
//       setError("Username is required.");
//     } else if (password === "") {
//       setError("Password is required.");
//     } else if (mobileNumber === "") {
//       setError("Mobile number is required.");
//     } else if (otp === "") {
//       setError("OTP is required.");
//     } else {
//       setOpenSnackbar(true);
//       setError("")
//     }
//   };

  const DonationType = ['Education','Women Empowerment' , 'Tree Plantation',]

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        margin: "10px 0px 0px 0px",
        '@media (max-width: 600px)': {
            margin: "10px 80px 0px 80px",
        }
     }}
    >
      <div>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message="Donation Successful!"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignContent: 'space-between',
                 
            }}>

                <img
                src={OrangeLogo}
                style={{maxHeight:'50px',maxWidth:'40px',marginBottom:'20px'}}
                />
                
                    <Typography
                        style={{ fontSize: "14px", fontWeight: "bold", color: "#202325",marginBottom:'20px' }}
                    >
                        SwaSarjan Foundation
                    </Typography>
                    <Typography
                        style={{ color: "#6C7072", fontSize: "10px", marginBottom: "20px",maxWidth:'300px' }}
                    >
                        Welcome to SwaSarjan donation, please fill out the form below. Hopefully it is blessed.
                    </Typography>
                
            </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          {error && (
              <div
              style={{
                  color: "white",
                  background: "#FF7F7F",
                  marginBottom: "15px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                }}
                >
              <ErrorIcon sx={{ marginRight: "5px" }} />
              <span>{error}</span>
            </div>
          )}
          {/* onSubmit={handleLogin} */}
          <form  style={{margin:'10px 0px 0px 0px'}}>
            <div>
            <Typography style={{fontWeight:'lighter' , fontSize:'12px' , color:'GrayText'}}>Choose a donation type or none</Typography>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={DonationType}
                
                sx={{ width: 200}}
                renderInput={(params) => <TextField {...params} label="Donate" variant="standard"/>}
                />
            </div>
            
            <div
              style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  margin:'10px 0px'
                }}
            >
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" style={{fontWeight:'lighter' , fontSize:'12px' , color:'GrayText'}}>Chose a donation amount</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="100" control={<Radio />} label="Rs. 100" />
                        <FormControlLabel value="500" control={<Radio />} label="Rs. 500" />
                        <FormControlLabel value="1000" control={<Radio />} label="Rs. 1000" />
                    </RadioGroup>
                    <TextField label="Enter custom amount" variant="standard" sx={{ '& input': { fontSize: '16px' } }} />
                    </FormControl>
              
            </div>
            <div>
            <FormControl component="fieldset">
                <FormLabel component="legend" style={{fontWeight:'lighter' , fontSize:'12px' , color:'GrayText'}}>Choose a donation frequency</FormLabel>
                <RadioGroup
                    aria-label="donation-frequency"
                    defaultValue="oneTime"
                    name="donation-frequency"
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <FormControlLabel
                        value="Monthly"
                        style={{ backgroundColor: '',fontSize:'10px', minWidth: '100px',paddimg:'10px', marginRight: '20px' }}
                        control={<Radio />}
                        label="Monthly"
                    />
                    <FormControlLabel
                        value="oneTime"
                        style={{ backgroundColor: '',fontSize:'10px', minWidth: '100px' }}
                        control={<Radio />}
                        label="One time"
                    />
                </RadioGroup>
            </FormControl>
            <Typography style={{fontSize:'8px',color:'GrayText'}}>This will help a lot to the children and all people who need it</Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                marginTop:'20px'
              }}
            >
              
                <Button variant="outlined" 
                style={{
                    color:'#0C0C0C',
                    backgroundColor:'#FFFFFF' , 
                    borderColor:'#0C0C0C',
                    height:'30px',
                    width:'120px'
                }}
                    
                    >
                        Cancle
                    </Button>
                    <Button
                        variant="outlined"
                        style={{
                            backgroundColor: '#0C0C0C',
                            color: '#FFFFFF',
                            borderColor: '#0C0C0C',
                            height:'30px',
                            width:'120px'
                        }}
                        
                    >
                        Go to Pay
                    </Button>              
            </div>
            
          </form>
              <Link to='/' style={{display:isMedium?"block":"none"}}>
                <Button variant="" style={{ color: "#F26522" ,fontSize:'10px', backgroundColor:'#FFFFFF' }} startIcon={<ArrowBackIcon style={{fontSize:'10px'}} />}>
                  Back to Home
                </Button>
                </Link>
        </div>
      </div>
    </div>
  );
}

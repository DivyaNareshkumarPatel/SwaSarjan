import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { styled, useMediaQuery } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OrangeLogo from '../images/Swa Icon Name Orange.png'

const InputStyle = styled("input")(({ isMedium }) =>({
  width: isMedium ? "100%":"365px",
  margin: "10px 80px",
  height: "auto",
  borderRadius: "50px",
  border: "1px solid #CDCFD0",
  padding: "5px",
  "&:placeholder": {
    color: "#CDCFD0",
  },
}));

const Row = styled(Box)(({ isMedium }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "space-around",
  alignItems: "center",
  margin: "0px 10px",
  flexDirection: isMedium ? "column" : "row", // Change direction based on screen size
}));

const RegistrationMainForm = () => {
  const isMedium = useMediaQuery("(max-width:800px)");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px 40px",
        flexDirection: "column",
      }}
    >
      <div>
        <div style={{
            display:'flex',
            flexDirection : isMedium ? 'column' : 'row' ,
            justifyContent: isMedium ? 'center' : 'flex-start' ,
            textAlign:'left'
        }}>
            <div>

        <img
            src={OrangeLogo}
            style={{
                height: isMedium?'40px':'50px',
                width: isMedium?'30px':'40px',
                margin:'0px 60px 0px 10px'
            }}
            />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginBottom:'30px'
          }}
        >
          <Typography variant="h5" style={{textAlign:'left'}}>Register your Account</Typography>
          <Typography variant="h7">
            Register Yourself & let’s get started with SwaSarjan
          </Typography>
        </div>
        </div>
        <Row isMedium={isMedium}>
          <InputStyle type="text" placeholder="Name" />
          <InputStyle type="text" placeholder="Username" />
        </Row>

        <Row isMedium={isMedium}>
          <InputStyle type="text" placeholder="Email" />
          <InputStyle type="text" placeholder="password" />
        </Row>
        <Row isMedium={isMedium}>
          <InputStyle type="text" placeholder="Mobile no." />
          <InputStyle type="text" placeholder="OTP" />
        </Row>
        <Row isMedium={isMedium}>
          <InputStyle type="text" placeholder="DOB" />
          <div style={{ display: "flex",alignItems:'center',justifyContent:'center',flexDirection: "row" , margin: isMedium?'0px 0px':'10px 285px 10px 80px'}}>
            <label
              style={{
                fontWeight: "lighter",
                fontSize: "12px",
                fontWeight:"bold",
                color: "GrayText",
                alignItems:'center',
              }}
            >
              Gender:
            </label>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </Row>
        <Row isMedium={isMedium}>
          <InputStyle type="text" placeholder="Address" />
          <InputStyle type="text" placeholder="State" />
        </Row>
        <Row isMedium={isMedium}>
          <InputStyle type="text" placeholder="City" />
          <InputStyle type="text" placeholder="Pin Code" />
        </Row>
        <Row isMedium={isMedium}>
          <InputStyle type="text" placeholder="Pan Card" />
          <InputStyle type="text" placeholder="Adhar Card" />
        </Row>
        <Row isMedium={isMedium}>
            <lable style={{margin:'10px 80px'}}>Photo</lable>
          <InputStyle type="file" placeholder="Photo" />
        </Row>
        <Row isMedium={isMedium}>
          <lable style={{margin:'10px 80px'}}>signature</lable>
          <InputStyle type="file"  label="Signature" />
        </Row>
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}
        >
            <Button
            endIcon={<ArrowForwardIcon style={{marginLeft:'12px'}}/>} 
            style={{
                backgroundColor:'#0C0C0C',
                color:'#FFFFFF',
                borderRadius:'30px',
                width:'200px'
            }}>
                register
            </Button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationMainForm;

import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";

const InputStyle = styled("input")({
  width: "100%",
  margin: "10px 80px",
  height: "25px",
  borderRadius: "50px",
  border: "1px solid #CDCFD0",
  padding: "5px",
  "&:placeholder": {
    color: "#CDCFD0",
  },
});

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Register your Account</Typography>
          <Typography variant="h7">
            Register Yourself & let’s get started with SwaSarjan
          </Typography>
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
          <div style={{ display: "flex",alignItems:'center',justifyContent:'center',flexDirection: "row" , margin:'0px 80px'}}>
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
          <InputStyle type="text" placeholder="Photo" />
          <InputStyle type="text" placeholder="Signature" />
        </Row>
      </div>
    </div>
  );
};

export default RegistrationMainForm;

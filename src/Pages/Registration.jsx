import React from "react";
import LoginCommunity from "../Components/LoginCommunity";
import RegistrationOptions from "../Components/RegistrationOptions";
import RegistrationMainForm from "../Components/RegistrationMainForm";
import {Box,Typography,styled, useMediaQuery } from "@mui/material";


const FirstDisplay = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // gap: "2rem",
  flexDirection: "row",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  }
});


export default function Registration() {
    const isMedium = useMediaQuery("(max-width:807px)");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#F5F5F5",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
          margin:"10px"
        }}
      >
        <FirstDisplay>
          <div style={{ display: isMedium ? "block" : "none" }}><LoginCommunity/></div>
          <div><RegistrationOptions/></div>
        </FirstDisplay>        
      </div>
    </div>
  );
}

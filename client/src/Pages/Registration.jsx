import React,{useState } from "react";
// import LoginCommunity from "../Components/LoginCommunity";
import RegistrationOptions from "../Components/RegistrationOptions";
import RegistrationMainForm from "../Components/RegistrationMainForm";
import {Box,styled, useMediaQuery ,Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';

// const FirstDisplay = styled(Box)({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   // gap: "2rem",
//   flexDirection: "row",
//   "@media (max-width: 600px)": {
//     flexDirection: "column",
//   }
// });


export default function Registration() {
    // const isMedium = useMediaQuery("(max-width:807px)");
    const [showFirstComponent, setShowFirstComponent] = useState(true);

    const handleToggle = () => {
      setShowFirstComponent(!showFirstComponent);
    };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // height : isMedium ? "auto" : "100vh",
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
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          margin:"10px"
        }}
      >
        {showFirstComponent ? (
          <RegistrationMainForm/>
      ) : (
          <RegistrationOptions/>
      )}
      {showFirstComponent ? (
          
        <Button
            onClick={handleToggle}
            endIcon={<ArrowForwardIcon style={{marginLeft:'12px'}} />} 
            style={{
                backgroundColor:'#0C0C0C',
                color:'#FFFFFF',
                borderRadius:'30px',
                width:'200px'
            }}>
                register
            </Button>
      ) : (
            <Button
            onClick={handleToggle}
            startIcon={<ArrowBackwardIcon style={{marginRight:'12px'}} />} 
            style={{
                backgroundColor:'#0C0C0C',
                color:'#FFFFFF',
                borderRadius:'30px',
                width:'180px'
            }}>
                Back
            </Button>
      )}
      </div>
    </div>
  );
}
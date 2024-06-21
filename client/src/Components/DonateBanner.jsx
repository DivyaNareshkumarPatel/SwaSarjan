import React from "react";
import image3 from "../images/image3.png";
import { Typography } from "@mui/material";
import WhiteLogo from "../images/Swa Icon Name White.png";

const DonateBanner = () => {
  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "20px",
        height: "93%",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <img
        src={image3}
        alt="Background"
        style={{
          maxWidth: "350px",
          height: "100%",
          objectFit: "cover",
          filter: "blur(0.1px) brightness(0.8)",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        //   padding: "10px",
          zIndex: "10",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <img
            src={WhiteLogo}
            alt="Logo"
            style={{ width: "25px", marginBottom: "10px" }}
          />
        </div>
        <div>
          <Typography
            variant="h6"
            style={{ color: "white", fontFamily: "Sansita", fontWeight: 700, fontSize:"38px", textAlign:"left" }}
          >
            We Can Save The Future
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DonateBanner;

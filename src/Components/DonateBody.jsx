import React from "react";
import DonateBanner from "./DonateBanner";
import DonateForm from '../Components/DonateForm';
import { useMediaQuery } from "@mui/material";
export default function DonateBody() {
    const isMedium = useMediaQuery("(max-width:807px)");
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // height: "100vh",
        
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
        <div style={{display:isMedium?"none":"block"}}><DonateBanner/></div>
        <div><DonateForm/></div>
      </div>
    </div>
  );
}

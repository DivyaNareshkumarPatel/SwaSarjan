import React from "react";
import LoginCommunity from "../Components/LoginCommunity";
import LoginForm from "../Components/LoginForm";
import { useMediaQuery } from "@mui/material";
export default function Login() {
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
        <div style={{display:isMedium?"none":"block"}}><LoginCommunity /></div>
        <div><LoginForm /></div>
      </div>
    </div>
  );
}

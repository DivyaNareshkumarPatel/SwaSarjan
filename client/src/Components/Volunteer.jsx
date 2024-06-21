import React from "react";
import img from "../images/volunteer.png";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function Volunteer() {
  const isSmallScreen = window.innerWidth <= 600;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img src={img} alt="" style={{ width: "100%" }} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
            paddingLeft: "1rem",
          }}
        >
          <div style={{ paddingLeft: "50px" }}>
            <Typography
              style={{
                fontSize: isSmallScreen ? "1.2rem" : "2rem",
                fontWeight: "bold",
                marginBottom: "0.3rem",
              }}
            >
              Be a Volunteer with Us
            </Typography>
            <Typography style={{ marginBottom: "0.3rem" }}>
              You can do what you do best
            </Typography>
            <Link to='/registration'>
            <Button

              style={{
                border: "black solid 1px",
                borderRadius: "50px",
                fontSize: "10px",
                padding: "8px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              variant="contained"
              sx={{
                borderRadius: 20,
                color: "black",
                border:"black solid 1px",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
              >
              Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

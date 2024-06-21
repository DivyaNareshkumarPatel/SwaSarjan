import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function LoginCommunity() {
  return (
    <div>
      <div
        style={{
          background: "#0C0C0C",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "550px",
          borderRadius:"10px",
        }}
      >
        <Link to='/'>
        <Button variant="" style={{ color: "#F26522" , backgroundColor:'#0C0C0C' }} startIcon={<ArrowBackIcon />}>
          Back to Home
        </Button>
        </Link>
        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            margin: "40px",
          }}
        >
          <div>
            <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
              Welcome to the community of
            </Typography>
            <Typography
              style={{ color: "#F26522", fontSize: "30px", fontWeight: "bold" }}
            >
              SwaSarjan Foundation
            </Typography>
          </div>
          <div>
            <Typography>
              Share your{" "}
              <span style={{ color: "#F26522", fontSize: "18px" }}>love</span>{" "}
              to make <br />
              someone’s life better
            </Typography>
          </div>
          <div>
            <Button
              sx={{
                border: "white 1px solid",
                color: "white",
                fontSize: "12px",
                padding: "10px 30px",
                borderRadius: "50px",
                fontWeight:"600",
                "&:hover": { background: "white", color: "black" },
              }}
            >
              Explore our Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

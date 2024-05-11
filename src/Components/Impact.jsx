import React from "react";
import { Typography, Button } from "@mui/material";
import img from "../images/HomeImpact.png";
import ImpactData from "./ImpactData";
import { Link } from "react-router-dom";

export default function Impact() {
  return (
    <div
      style={{
        color: "white",
        background: "#0C0C0C",
        padding: "40px",
        maxWidth: "100vw",
      }}
    >
      <div>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", fontSize: "2em", marginBottom: "10px" }}
        >
          Our Impact
        </Typography>
        <Typography style={{marginBottom:"20px"}}>The works we've done till the date</Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <div
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginRight: "20px",
          }}
        >
          <img
            src={img}
            alt=""
            style={{
              maxWidth: "520px",
              minWidth: "200px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", flex: 2 }}>
            <ImpactData
              counter={2000}
              content="Children are promoted and helped for education."
            />
            <ImpactData
              counter={5000}
              content="Trees are planted in city and traffic areas."
            />
            <ImpactData
              counter={1000}
              content="Girls are provided scholarships for future."
            />
            <ImpactData
              counter={4000}
              content="Villagers are got basic health check-ups for free."
            />
          </div>
          <div>
            <Link to="/about">
            <Button
              variant="contained"
              sx={{
                marginTop: "20px",
                backgroundColor: "transparent",
                borderRadius: "20px",
                borderWidth: "2px",
                border: "2px solid white",
                color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Know More About Us
            </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

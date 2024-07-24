import React from "react";
import { Typography, Button, Grid } from "@mui/material";
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
        <Typography style={{ marginBottom: "20px" }}>
          The works we've done till the date
        </Typography>
      </div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={4} md={6}>
              <ImpactData counter={125} content="Team Members" />
            </Grid>
            <Grid item xs={6} sm={4} md={6}>
              <ImpactData counter={11} content="Years of Experience" />
            </Grid>
            <Grid item xs={6} sm={4} md={6}>
              <ImpactData counter={2100} content="Projects Done" />
            </Grid>
            <Grid item xs={6} sm={4} md={6}>
              <ImpactData counter={9} content="States" />
            </Grid>
            <Grid item xs={6} sm={4} md={6}>
              <ImpactData counter={13} content="Countries" />
            </Grid>
            <Grid item xs={6} sm={4} md={6}>
              <ImpactData counter={50} content="Collaborations" />
            </Grid>
          </Grid>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Link to="/about">
              <Button
                variant="contained"
                sx={{
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
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

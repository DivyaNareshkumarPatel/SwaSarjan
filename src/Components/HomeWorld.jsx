import React from "react";
import { Typography } from "@mui/material";
import HomeWorldContent from "./HomeWorldContent";
import img from "../images/HomeWorld.png";
export default function HomeWorld() {
  return (
    <div style={{ margin: "35px", display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <img
          src={img}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            minWidth:"250px",
            maxWidth:"500px"
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              fontSize: "2em",
              marginBottom: "15px",
              maxWidth: "550px",
              minWidth:"250px"
            }}
          >
            We work differently to keep world safe
          </Typography>
        </div>
        <div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <HomeWorldContent heading="Save Girl Child" content="Save a girl brighten the world."/>
              <HomeWorldContent heading="Spread Love" content="Spread love everywhere you go."/>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <HomeWorldContent heading="Healthcare" content="Your good health is your greatest achievement."/>
              <HomeWorldContent heading="Education" content="Education is the most powerful tool to change the world."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

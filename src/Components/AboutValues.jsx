import React from "react";
import { Typography } from "@mui/material";
import values from "../images/Values.png";
import courage from "../images/courage.png";
import innovation from "../images/innovation.png";
import sustain from "../images/sustainability.png";
import exce from "../images/excellence.png";
export default function AboutValues() {
  return (
    <div
      style={{ backgroundColor: "#0C0C0C", color: "white", padding: "40px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <img src={values} alt="" />
          <br />
          <Typography
            style={{
              textAlign: "center",
              fontSize: "1.5em",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            SwaSarjan Values
          </Typography>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly", width:"100%", margin:"40px", flexWrap:"wrap"}}>
          <div>
            <div
              style={{ height: "2px", width: "200px", backgroundColor: "gray" }}
            ></div>
            <div>
              <img src={courage} alt="" style={{width:"150px", marginTop:"20px", marginBottom:"20px", height:"150px"}}/>
              <br />
              <Typography style={{fontSize:"20px", fontWeight:"bold"}}>Courage</Typography>
            </div>
          </div>
          <div>
            <div
              style={{ height: "2px", width: "200px", backgroundColor: "gray" }}
            ></div>
            <div>
              <img src={innovation} alt="" style={{width:"150px", marginTop:"20px", marginBottom:"20px", height:"150px"}}/>
              <br />
              <Typography style={{fontSize:"20px", fontWeight:"bold"}}>Innovation</Typography>
            </div>
          </div>
          <div>
            <div
              style={{ height: "2px", width: "200px", backgroundColor: "gray" }}
            ></div>
            <div>
              <img src={sustain} alt="" style={{width:"150px", marginTop:"20px", marginBottom:"20px", height:"150px"}}/>
              <br />
              <Typography style={{fontSize:"20px", fontWeight:"bold"}}>Sustainability</Typography>
            </div>
          </div>
          <div>
            <div
              style={{ height: "2px", width: "200px", backgroundColor: "gray" }}
            ></div>
            <div>
              <img src={exce} alt="" style={{width:"150px", marginTop:"20px", marginBottom:"20px", height:"150px"}} />
              <br />
              <Typography style={{fontSize:"20px", fontWeight:"bold"}}>Excellence</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Typography, Button } from "@mui/material";
import aboutSwa from "../images/aboutSwa.png";
import rocket from "../images/Rocket.png";
import bulb from "../images/bulb.png";
import logo from "../images/SwaLogoMain.png";
import { Link } from "react-router-dom";
export default function AboutSwaSarjan() {
  return (
    <div>
      <div>
        <Typography
          variant="h5"
          style={{ padding: "35px", fontWeight: "500" }}
        >
          About SwaSarjan
        </Typography>
      </div>
      <div
        style={{
          background: "#0C0C0C",
          color: "white",
          display: "flex",
          padding: "40px",
          justifyContent: "space-evenly",
          flexWrap:"wrap"
        }}
      >
        <div style={{ flex: "1", maxWidth: "528px" }}>
          <div>
            <Typography style={{fontSize:"18px"}}>~   WHAT IS SWASARJAN</Typography>
          </div>
          <div>
            <Typography style={{marginTop:"40px", fontSize:"23px"}}>
              Swa Sarjan Foundation is an International foundation recognized
              and registered under United Nations founded and leaded by Mr.
              Kaushal Gohil.
            </Typography>
          </div>
          <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", marginTop:"40px"}}>
              <div>
                <img src={rocket} alt="" style={{width:"80px"}} />
              </div>
              <div>
                <Typography style={{maxWidth:"300px", marginLeft:"30px"}}>
                  We look forward to work in as many as social problems and try
                  to eradicate them & do what we can.
                </Typography>
              </div>
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", marginTop:"40px"}}>
              <div>
                <img src={bulb} alt=""style={{width:"80px"}}  />
              </div>
              <div>
                <Typography style={{maxWidth:"300px", marginLeft:"30px"}}>
                  We develop, encourage and join youths to our organization for
                  their self development and progress.
                </Typography>
              </div>
            </div>
          </div>
          <div>
          <Button
              variant="contained"
              sx={{
                borderRadius:"2px",
                padding:"10px 15px",
                marginTop:"60px",
                marginBottom:"20px",
                color: "white",
                backgroundColor: "#7622D7",
                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            >
              Our Team
            </Button>
          </div>
        </div>
        <div
          style={{
            flex: "1",
            maxWidth: "358px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop:"20px"
          }}
        >
          <img src={aboutSwa} alt="" style={{ maxWidth: "100%" }} />
          <div
            style={{
              background: "white",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              height: "170px",
              width: "200px",
              borderRadius: "20px",
              marginTop: "-120px",
            }}
          >
            <img src={logo} alt="" style={{ width: "150px" }} />
            <br />
            <Link to="/contact">
            <Button
              variant="contained"
              sx={{
                borderRadius: 20,
                color: "black",
                border:"black solid 1px",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              Contact
            </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

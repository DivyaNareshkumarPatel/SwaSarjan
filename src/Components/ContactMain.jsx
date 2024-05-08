import React from "react";
import { Typography, Button } from "@mui/material";
import back from "../images/contactDesign.png";
import location from "../images/oLocation.png";
import mail from "../images/oMail.png";
import phone from "../images/oPhone.png";
import linkedin from "../images/olinkedin.png";
import facebook from "../images/oFacebook.png";
import insta from "../images/oInstagram.png";
import youtube from "../images/oYoutube.png";
import send from "../images/letter_send.png";
export default function ContactMain() {
  return (
    <div
      style={{
        background: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          marginBottom: "40px",
        }}
      >
        <Typography
          style={{ color: "#F26522", fontSize: "1.8em", fontWeight: "bold" }}
        >
          Contact Us
        </Typography>
        <Typography style={{ fontSize: "15px" }}>
          Any question or remarks? Just write us a message!
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexWrap: "wrap-reverse",
          borderRadius: "5px",
          padding: "10px",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${back})`,
            height: "547px",
            maxWidth: "491px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            borderRadius: "10px",
            flex: "1",
          }}
        >
          <div style={{ marginLeft: "40px" }}>
            <Typography style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              Contact Information
            </Typography>
            <Typography style={{ fontSize: "15px", color: "#C9C9C9" }}>
              Say something to start a live chat!
            </Typography>
          </div>
          <div>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={phone}
                  alt=""
                  style={{ margin: "40px 20px", marginLeft: "40px" }}
                />
              </div>
              <div style={{ margin: "40px 10px", width: "300px" }}>
                <Typography>07043038000</Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={mail}
                  alt=""
                  style={{ margin: "40px 20px", marginLeft: "40px" }}
                />
              </div>
              <div style={{ margin: "40px 10px", width: "300px" }}>
                <Typography>demo@gmail.com</Typography>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <img
                  src={location}
                  alt=""
                  style={{ margin: "40px 20px", marginLeft: "40px" }}
                />
              </div>
              <div style={{ margin: "40px 10px", width: "300px" }}>
                <Typography>
                  A/10, Dwarkesh Appt B/h, Post Office, Rambagh, Maninagar,
                  Ahmedabad, Gujarat 380008
                </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "40px",
            }}
          >
            <div>
              <img
                src={linkedin}
                style={{ width: "40px", margin: "10px", cursor: "pointer" }}
                alt=""
              />
            </div>
            <div>
              <img
                src={facebook}
                style={{ width: "40px", margin: "10px", cursor: "pointer" }}
                alt=""
              />
            </div>
            <div>
              <img
                src={insta}
                style={{ width: "40px", margin: "10px", cursor: "pointer" }}
                alt=""
              />
            </div>
            <div>
              <img
                src={youtube}
                style={{ width: "40px", margin: "10px", cursor: "pointer" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div
            style={{
              paddingLeft: "100px",
              paddingRight: "60px",
              height:"100%"
            }}
          >
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "100%",
              }}
            >
              <div style={{ display: "flex",flexWrap:"wrap", justifyContent: "space-between" }}>
                <div>
                  <label htmlFor="firstName" style={{fontSize:"12px"}}>First Name</label>
                  <br />
                  <input type="text" style={{border:"0 0 1px 0 solid black", outline:"0", padding:"5px", width:"300px"}}/>
                </div>
                <div>
                  <label htmlFor="lastName" style={{fontSize:"12px"}}>Last Name</label>
                  <br />
                  <input type="text" style={{border:"0 0 1px 0 solid black", outline:"0", padding:"5px", width:"300px"}}/>
                </div>
              </div>
              <div>
                <div
                  style={{ display: "flex",flexWrap:"wrap", justifyContent: "space-between"}}
                >
                  <div>
                    <label htmlFor="email" style={{fontSize:"12px"}}>Email</label>
                    <br />
                    <input type="email" style={{border:"0 0 1px 0 solid black", outline:"0", padding:"5px", width:"300px"}}/>
                  </div>
                  <div>
                    <label htmlFor="phone" style={{fontSize:"12px"}}>Phone Number</label>
                    <br />
                    <input type="number" style={{border:"0 0 1px 0 solid black", outline:"0", padding:"5px", width:"300px"}}/>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="selectRole">Select Role?</label>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <input type="radio" name="selectRole" /> Volunteering
                  </div>
                  <div>
                    <input type="radio" name="selectRole" /> Donor
                  </div>
                  <div>
                    <input type="radio" name="selectRole" /> Member
                  </div>
                  <div>
                    <input type="radio" name="selectRole" /> Other
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <br />
                <input type="text" placeholder="Write your message.." />
              </div>
              <div>
                <Button>Send Message</Button>
              </div>
              <div>
                <img src={send} alt="" style={{ width: "200px" }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

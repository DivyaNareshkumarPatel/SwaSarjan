import React, { useState } from "react";
import {
  Typography,
  Button,
  useMediaQuery,
  styled,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import back from "../images/contactDesign.png";
import location from "../images/oLocation.png";
import mail from "../images/oMail.png";
import phone from "../images/oPhone.png";
import linkedin from "../images/olinkedin.png";
import facebook from "../images/oFacebook.png";
import insta from "../images/oInstagram.png";
import youtube from "../images/oYoutube.png";
import send from "../images/letter_send.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

export default function ContactMain() {
  const isMedium = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:375px)");
  const InputStyle = styled("input")({
    border: "none",
    outline: "none",
    borderRadius: "0",
    borderBottom: "1px solid #ccc",
    color: "#333",
    marginBottom: "10px",
    width: isMedium ? "250px" : "280px",
    "&:hover": {
      borderBottom: "1px solid #011C2A",
    },
    "&:focus": {
      outline: "none",
      borderBottom: "1px solid #011C2A",
    }
  });

  const LabelBox = styled("div")({
    display: "inline-block",
    width: isMedium ? "100%" : "auto",
  });

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !phoneNum || !role || !message) {
      setError('Please fill in all fields.');
      return;
    }
    if(firstName.length<3){
      setError('Please enter a valid first name.');
      return;
    }
    if(lastName.length<3){
      setError('Please enter a valid last name.');
      return;
    }
    var phonePattern = /^\d{10}$/;;
    if(!phonePattern.test(phoneNum)){
      setError('Please enter a valid phone number.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if(message.length<10){
      setError('Message lenght should be atleast 10 characters');
      return;
    }
    console.log('Form submitted:', { firstName, lastName, email, phoneNum, role, message });
    setError('');
  };

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
          flexWrap: "wrap",
          borderRadius: "5px",
          padding: isMobile ? "10px" : "10px",
          width: isMobile ? "90%" : "80%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${back})`,
            height: "600px",
            maxWidth: "491px",
            minWidth: isMobile ? "270px" : "300px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            borderRadius: "10px",
            flex: "1",
          }}
        >
          <div style={{ marginLeft: "40px" }}>
            <Typography
              style={{
                fontSize: isMedium ? "1em" : "1.2em",
                fontWeight: "bold",
              }}
            >
              Contact Information
            </Typography>
            <Typography
              style={{ fontSize: "15px", color: "#C9C9C9", textWrap: "wrap" }}
            >
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
              <div style={{ margin: "40px 10px", maxWidth: "300px" }}>
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
              <div style={{ margin: "40px 10px", maxWidth: "300px" }}>
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
              <div style={{ margin: "40px 10px", maxWidth: "300px" }}>
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
              flexWrap: "wrap",
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
              paddingLeft: isMedium ? "20px" : "100px",
              paddingRight: isMedium ? "20px" : "60px",
              marginTop: isMedium ? "  20px" : "0px",
              height: "100%",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "100%",
              }}
            >
              {error && (
                <div
                  style={{
                    color: "white",
                    background: "#FF7F7F",
                    marginBottom: "15px",
                    borderRadius: "5px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    padding:"5px"
                  }}
                >
                  <ErrorIcon sx={{marginRight:"5px"}} />
                  <span>{error}</span>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: isMedium ? "center" : "space-between",
                  width: "100%",
                }}
              >
                <LabelBox>
                  <label htmlFor="firstName">First Name</label>
                  <br />
                  <InputStyle
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </LabelBox>
                <LabelBox>
                  <label htmlFor="lastName">Last Name</label>
                  <br />
                  <InputStyle
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </LabelBox>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: isMedium ? "center" : "space-between",
                  }}
                >
                  <LabelBox>
                    <label htmlFor="email">Email</label>
                    <br />
                    <InputStyle
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </LabelBox>
                  <LabelBox>
                    <label htmlFor="phone">Phone Number</label>
                    <br />
                    <InputStyle
                      type="text"
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                    />
                  </LabelBox>
                </div>
              </div>
              <div>
                <label
                  htmlFor="selectRole"
                  style={{
                    paddingTop: "10px",
                    display: "block",
                    paddingBottom: "5px",
                    color: "rgb(1 37 56)",
                    fontWeight: "bold",
                  }}
                >
                  Select Role?
                </label>
                <RadioGroup
                  name="selectRole"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <FormControlLabel
                        value="volunteering"
                        control={
                          <Radio
                            checkedIcon={
                              <CheckCircleIcon style={{ color: "#011C2A" }} />
                            }
                          />
                        }
                        label="Volunteering"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="donor"
                        control={
                          <Radio
                            checkedIcon={
                              <CheckCircleIcon style={{ color: "#011C2A" }} />
                            }
                          />
                        }
                        label="Donor"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="member"
                        control={
                          <Radio
                            checkedIcon={
                              <CheckCircleIcon style={{ color: "#011C2A" }} />
                            }
                          />
                        }
                        label="Member"
                      />
                    </div>
                    <div>
                      <FormControlLabel
                        value="other"
                        control={
                          <Radio
                            checkedIcon={
                              <CheckCircleIcon style={{ color: "#011C2A" }} />
                            }
                          />
                        }
                        label="Other"
                      />
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div style={{ marginTop: "10px", color: "#8D8D8D" }}>
                <label htmlFor="message">Message</label>
                <br />
                <input
                  type="text"
                  placeholder="Write your message.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    "&:placeholder": { fontSize: "20px", color: "#8D8D8D" },
                    border: "none",
                    outline: "none",
                    borderRadius: "0",
                    borderBottom: "1px solid #ccc",
                    color: "#333",
                    marginBottom: "10px",
                    marginTop: "10px",
                    transition: "1s",
                    width: "100%",
                    "&:hover": {
                      borderBottom: "1px solid #011C2A",
                    },
                    "&:focus": {
                      outline: "none",
                      borderBottom: "1px solid #011C2A",
                    },
                  }}
                />
              </div>
              <div>
                <Button type="submit" sx={{ backgroundColor: "#011C2A", color: "white", "&:hover":{
                  background:"black"
                } }}>
                  Send Message
                </Button>
              </div>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={send} alt="" style={{ width: "170px" }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

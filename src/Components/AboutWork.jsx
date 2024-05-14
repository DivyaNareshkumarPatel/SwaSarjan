import React from "react";
import tick from "../images/tick.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function AboutWork() {
  return (
    <div
      style={{
        margin: "60px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          padding: "40px",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center"}}
        >
          <div>
            <img
              src={tick}
              alt=""
              style={{ width: "30px", marginRight: "20px", marginLeft:"10px" }}
            />
          </div>
          <div
            style={{
              margin: "10px",
              fontSize: "20px",
              minWidth: "160px",
              textWrap: "wrap",
              maxWidth: "800px",
            }}
          >
            We look forward to work in as many as social problems and try to
            eradicate them.
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center"}}
        >
          <div>
            <img
              src={tick}
              alt=""
              style={{ width: "30px", marginRight: "20px", marginLeft:"10px" }}
            />
          </div>
          <div
            style={{
              margin: "10px",
              fontSize: "20px",
              minWidth: "160px",
              textWrap: "wrap",
              maxWidth: "800px",
            }}
          >
            We develop, encourage and join youths to our organization for their
            self development and progress.
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center"}}
        >
          <div>
            <img
              src={tick}
              alt=""
              style={{ width: "30px", marginRight: "20px", marginLeft:"10px" }}
            />
          </div>
          <div
            style={{
              margin: "10px",
              fontSize: "20px",
              minWidth: "160px",
              textWrap: "wrap",
              maxWidth: "800px",
            }}
          >
            We look forward for providing many opportunities that we can.
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center"}}
        >
          <div>
            <img
              src={tick}
              alt=""
              style={{ width: "30px", marginRight: "20px", marginLeft:"10px" }}
            />
          </div>
          <div
            style={{
              margin: "10px",
              fontSize: "20px",
              minWidth: "160px",
              textWrap: "wrap",
              maxWidth: "800px",
            }}
          >
            We also do provide Internships at our Foundation, We work into
            various sectors rather than working in a specified sector.
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center"}}
        >
          <div>
            <img
              src={tick}
              alt=""
              style={{ width: "30px", marginRight: "20px", marginLeft:"10px" }}
            />
          </div>
          <div
            style={{
              margin: "10px",
              fontSize: "20px",
              minWidth: "160px",
              textWrap: "wrap",
              maxWidth: "800px",
            }}
          >
            We believe that we can do more together and Let's join our hands for
            the same.
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center"}}
        >
          <div>
            <img
              src={tick}
              alt=""
              style={{ width: "30px", marginRight: "20px", marginLeft:"10px" }}
            />
          </div>
          <div
            style={{
              margin: "10px",
              fontSize: "20px",
              minWidth: "160px",
              textWrap: "wrap",
              maxWidth: "800px",
            }}
          >
            Almost Foundation has made wonderful impact and made a legacy in
            last 6 years. Currently it is working in many different countries
            across globe and in many states of Incredible India.
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center"}}
        >
          <div>
            <img
              src={tick}
              alt=""
              style={{ width: "30px", marginRight: "20px", marginLeft:"10px" }}
            />
          </div>
          <div
            style={{
              margin: "10px",
              fontSize: "20px",
              minWidth: "160px",
              textWrap: "wrap",
              maxWidth: "800px",
            }}
          >
            If you will to join in any of our activities or join our
            organisation do connect us! (You can join us being at any corner of
            the world)
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Link to="/registration">
          <Button
            variant="contained"
            sx={{
              borderRadius: 20,
              color: "black",
              border: "black solid 1px",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Join Us
          </Button>
          </Link>

        </div>
      </div>
    </div>
  );
}

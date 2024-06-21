import React from "react";
import design from "../images/DonateDesign.png";
import { Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function CampaignComponent({ detail }) {
  const { image, head, head2, p1, p2, p3 } = detail;
  console.log(image);
  const Para = styled(Typography)({
    color: "#666C89",
    fontSize: "12px",
  });
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "40px, 20px",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={image} alt="" style={{ width: "280px" }} />
        </div>
        <div
          style={{
            maxWidth: "420px",
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <img
              src={design}
              alt=""
              style={{ marginRight: "10px", width: "20px", height: "20px" }}
            />
            <Typography style={{ color: "#666C89" }}>{head2}</Typography>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
              {head}
            </Typography>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <Para>{p1}</Para>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <Link to="/donate">
              <Button
                sx={{
                  background: "#F26522",
                  color: "white",
                  width: "100%",
                  "&:hover": {
                    background: "black",
                  },
                }}
              >
                Donate
              </Button>
            </Link>
          </div>
          <hr />
          <div style={{ marginBottom: "8px" }}>
            <Para>{p2}</Para>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <Para>{p3}</Para>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <Link to="/campaigndetail">
              <Button
                sx={{
                  background: "#7622D7",
                  color: "white",
                  "&:hover": {
                    background: "black",
                  },
                }}
              >
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

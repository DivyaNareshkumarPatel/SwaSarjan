import React from "react";
import { styled, Typography, Box } from "@mui/material";
import values from "../images/Values.png";
import courage from "../images/courage.png";
import innovation from "../images/innovation.png";
import sustain from "../images/sustainability.png";
import exce from "../images/excellence.png";

export default function AboutValues() {

  const ContentImage = styled(`img`)(({ theme }) => ({
    width: "150px",
    marginTop: "20px",
    marginBottom: "20px",
    height: "150px",
    [theme.breakpoints.down("sm")]: {
      height: "100px",
    },
  }));

  const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    margin: "40px",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  }));

  const ContentItem = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      marginBottom: "20px",
    },
  }));

  return (
    <div style={{ backgroundColor: "#0C0C0C", color: "white", padding: "40px" }}>
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

        <ContentBox>
          <ContentItem>
            <div style={{ height: "2px", width: "200px", backgroundColor: "gray" }}></div>
            <div>
              <ContentImage src={courage} alt="" />
              <br />
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>Courage</Typography>
            </div>
          </ContentItem>
          <ContentItem>
            <div style={{ height: "2px", width: "200px", backgroundColor: "gray" }}></div>
            <div>
              <ContentImage src={innovation} alt="" />
              <br />
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>Innovation</Typography>
            </div>
          </ContentItem>
          <ContentItem>
            <div style={{ height: "2px", width: "200px", backgroundColor: "gray" }}></div>
            <div>
              <ContentImage src={sustain} alt="" />
              <br />
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>Sustainability</Typography>
            </div>
          </ContentItem>
          <ContentItem>
            <div style={{ height: "2px", width: "200px", backgroundColor: "gray" }}></div>
            <div>
              <ContentImage src={exce} alt="" />
              <br />
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>Excellence</Typography>
            </div>
          </ContentItem>
        </ContentBox>
      </div>
    </div>
  );
}

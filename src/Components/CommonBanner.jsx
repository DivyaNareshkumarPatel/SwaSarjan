import React from "react";
import Carousel from "react-material-ui-carousel";
import img1 from "../images/HomeBanner1.png";
import img2 from "../images/HomeBanner2.jpeg";
import img3 from "../images/HomeBanner3.jpeg";
import img4 from "../images/HomeBanner4.jpeg";
import { Paper, Typography } from "@mui/material";

const styles = {
  paper: {
    position: "relative",
    textAlign: "center",
    color: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    transition: "none",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "left",
  },
  button: {
    borderRadius: "20px",
    backgroundColor: "#7622D7",
    color: "white",
  },
};
export default function CommonBanner({head, line1, line2}) {
  const images = [img1, img2, img3, img4];

  return (
    <div style={{ height: "60vh" }}>
      <Carousel
        indicatorContainerProps={{
          style: {
            display: "none",
          },
        }}
      >
        {images.map((imgSrc, index) => (
          <Paper
            style={{
              ...styles.paper,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgSrc})`,
            }}
          >
            <div style={styles.content}>
              <Typography
                variant="body1"
                style={{
                  fontSize: "2.3em",
                  maxWidth: "425px",
                  lineHeight: "1.1",
                  fontWeight:"bold"
                }}
              >
                {head}
              </Typography>
              <Typography
                variant="body1"
                style={{
                  fontSize: "1em",
                  fontWeight: "regular",
                  marginTop: "20px",
                  marginBottom: "40px",
                  lineHeight: "1.2",
                }}
              >
                {line1} <br />{line2}
              </Typography>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

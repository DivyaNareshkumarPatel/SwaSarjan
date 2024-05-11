import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import img1 from "../images/HomeMarquee1.png";
import img2 from "../images/HomeMarquee2.png";
import img3 from "../images/HomeMarquee3.png";
import img4 from "../images/HomeMarquee4.png";
import img5 from "../images/HomeMarquee5.png";

const images = [img1, img2, img3, img4, img5];

const useStyles = makeStyles((theme) => ({
  marqueeContainer: {
    overflow: "hidden",
    background:"white",
  },
  marquee: {
    whiteSpace: "nowrap",
    animation: "$marquee 40s linear infinite",
    [theme.breakpoints.down("sm")]: {
        animation: "$marquee 20s linear infinite",
      },
  },
  "@keyframes marquee": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
  marqueeImage: {
    display: "inline-block",
    maxHeight: "80px",
    marginRight: "120px",
    filter: "grayscale(100%)",
    transition: "filter 0.3s ease",
    marginTop:"20px",
    marginBottom:"20px",
    "&:hover": {
      filter: "none",
    },
    [theme.breakpoints.down("sm")]: {
      maxHeight: "40px",
      marginRight: "10px",
    },
  },
}));

export default function HomeMarquee() {
  const classes = useStyles();

  return (
    <div className={classes.marqueeContainer}>
      <div className={classes.marquee}>
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt=""
            className={classes.marqueeImage}
          />
        ))}
      </div>
    </div>
  );
}

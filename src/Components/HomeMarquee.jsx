import React from "react";
import img1 from "../images/HomeMarquee1.png";
import img2 from "../images/HomeMarquee2.png";
import img3 from "../images/HomeMarquee3.png";
import img4 from "../images/HomeMarquee4.png";
import img5 from "../images/HomeMarquee5.png";

const images = [img1, img2, img3, img4, img5];

export default function HomeMarquee() {
  const marqueeContainerStyle = {
    overflow: "hidden",
    background: "white",
  };

  const marqueeStyle = {
    whiteSpace: "nowrap",
    animation: "marquee 40s linear infinite",
  };

  const keyframesStyle = {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  };

  const marqueeImageStyle = {
    display: "inline-block",
    maxHeight: "80px",
    marginRight: "120px",
    filter: "grayscale(100%)",
    transition: "filter 0.3s ease",
    marginTop: "20px",
    marginBottom: "20px",
    "&:hover": {
      filter: "none",
    },
  };

  const smMarqueeImageStyle = {
    maxHeight: "40px",
    marginRight: "10px",
  };

  return (
    <div style={marqueeContainerStyle}>
      <div style={marqueeStyle}>
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt=""
            style={{
              ...marqueeImageStyle,
              ...(index > 0 && smMarqueeImageStyle), // Apply styles for small screens from the second image
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

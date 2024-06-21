import React, { useState, useEffect } from "react";
import img1 from "../images/HomeMarquee1.png";
import img2 from "../images/HomeMarquee2.png";
import img3 from "../images/HomeMarquee3.png";
import img4 from "../images/HomeMarquee4.png";
import img5 from "../images/HomeMarquee5.png";

const images = [img1, img2, img3, img4, img5];

export default function HomeMarquee() {
  const [isHovered, setIsHovered] = useState(false);
  const [imageWidth, setImageWidth] = useState("auto");

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 768) {
        setImageWidth("100px");
      } else {
        setImageWidth("170px");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const grayscaleStyle = {
    filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
    transition: "filter 0.5s ease",
  };

  return (
    <div>
      <marquee behavior="" direction="">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "30px",
            animation: "marquee 20s linear infinite",
            alignItems:"center"
          }}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt=""
                style={{
                  ...grayscaleStyle,
                  width: imageWidth,
                  height: "auto",
                  marginRight:"10px"
                }}
                onMouseMove={handleMouseEnter}
                onMouseOut={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
}

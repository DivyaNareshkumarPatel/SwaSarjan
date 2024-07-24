import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import BannerItem from "./BannerItem";
import img1 from "../images/HomeBanner1.png";
import img2 from "../images/HomeBanner2.jpeg";
import img3 from "../images/HomeBanner3.jpeg";
import img4 from "../images/HomeBanner4.jpeg";

export default function HomeBanner() {
  const [bannerHeight, setBannerHeight] = useState("91vh");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setBannerHeight("50vh");
      } else {
        setBannerHeight("91vh");
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const images = [img1, img2, img3, img4];

  return (
    <div style={{ height: bannerHeight }}>
      <Carousel
        indicatorContainerProps={{
          style: {
            display: "none",
          },
        }}
      >
        {images.map((imgSrc, index) => (
          <BannerItem key={index} imgSrc={imgSrc} />
        ))}
      </Carousel>
    </div>
  );
}

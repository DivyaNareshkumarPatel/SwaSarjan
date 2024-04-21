import React from "react";
import Carousel from "react-material-ui-carousel";
import BannerItem from "./BannerItem";
import img1 from "../images/HomeBanner1.png";
import img2 from "../images/HomeBanner2.jpeg";
import img3 from "../images/HomeBanner3.jpeg";
import img4 from "../images/HomeBanner4.jpeg";
export default function HomeBanner() {
  const images = [img1, img2, img3, img4];

  return (
    <div style={{height:"80vh"}}>
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

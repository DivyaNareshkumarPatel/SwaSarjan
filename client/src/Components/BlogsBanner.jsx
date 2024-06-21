import React from "react";
import Carousel from "react-material-ui-carousel";
import BlogsBannerItems from "./BlogsBannerItems";
import img1 from "../images/HomeBanner1.png";
import img2 from "../images/HomeBanner2.jpeg";
import img3 from "../images/HomeBanner3.jpeg";
import img4 from "../images/HomeBanner4.jpeg";
export default function BlogsBanner() {
  const images = [img1, img2, img3, img4];

  return (
    <div style={{height:"60vh", margin:"20px"}}>
      <Carousel
        indicatorContainerProps={{
          style: {
            display: "none",
          },
        }}
      >
        {images.map((imgSrc, index) => (
          <BlogsBannerItems key={index} imgSrc={imgSrc} />
        ))}
      </Carousel>
    </div>
  );
}

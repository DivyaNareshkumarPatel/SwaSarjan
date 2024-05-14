import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import ModelVideo from "./ModelVideo";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./GallerySlickVideo.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Typography } from "@mui/material";
const extractVideoId = (url) => {
  const match = url.match(/(?:embed\/|v=)([^?&]+)/);
  return match && match[1];
};
const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/MBqdXGsjJ74?si=WIxzbqhBb7HeXQq2",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/_pJX3Wewazs?si=MDqCiJtiRZSUJvn_",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/0Miqj9XLL3U?si=mrAFnMiWu4YUqDbd",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/qW8GsNSM1VM?si=sbd0T3viaCkAI4Jg",
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/YLha-22YAWM?si=4X0Hx1nA_v6RihPG",
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/Ozzr7C6u3iw?si=taK1jz-K03CML-fA",
  },
];

function GallerySlickVideo() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseClick = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="container">
      <div
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "5px" }}
      >
        <Typography
          style={{ fontSize: "30px", fontWeight: "bold" }}
          className="head"
        >
          Video Gallery
        </Typography>
        <Typography style={{ fontSize: "14px" }}>
          Check Out Our videos
        </Typography>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {videos.map((video, index) => (
          <SwiperSlide>
            <img
              src={`https://img.youtube.com/vi/${extractVideoId(
                video.src
              )}/0.jpg`}
              alt={`Thumbnail ${index}`}
              onClick={() => handleVideoClick(video)}
            ></img>
            <PlayCircleOutlineRoundedIcon
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "50px",
                color: "rgba(255, 255, 255, 0.8)",
                cursor: "pointer",
              }}
              onClick={() => handleVideoClick(video)}
            />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div>
            {/* <div className="swiper-button-prev slider-arrow">
              <KeyboardArrowLeftIcon
                sx={{ color: "#7622D7" }}
                className="left"
              ></KeyboardArrowLeftIcon>
            </div> */}
          </div>
          {/* <div className="swiper-button-next slider-arrow">
            <KeyboardArrowRightIcon
              sx={{ color: "#7622D7" }}
              className="right"
            ></KeyboardArrowRightIcon>
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      {selectedVideo && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "800px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <ModelVideo
              selectedVideo={selectedVideo}
              handleCloseClick={handleCloseClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GallerySlickVideo;

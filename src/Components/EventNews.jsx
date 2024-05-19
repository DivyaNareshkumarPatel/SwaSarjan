import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./GallerySlickVideo.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Typography, Modal } from "@mui/material";
import image1 from '../images/news1.jpeg';
import image2 from '../images/news2.jpeg';
import image3 from '../images/news3.jpeg';
import image4 from '../images/news4.jpg';
import image5 from '../images/news5.jpg';
const images = [image1, image2, image3, image4, image5]

function EventNews() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
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
          News
        </Typography>
        <Typography style={{ fontSize: "14px" }}>
          Check Out our News
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
        {images.map((image, index) => (
          <SwiperSlide>
            <img
              src={image}
              alt={index}
              onClick={() => handleOpen(image)}
            ></img>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <Modal
          open={!!selectedImage}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin:"20px"
          }}
        >
          <div>
            <img src={selectedImage} alt="" style={{ maxWidth: "100%", maxHeight: "100%"}} />
          </div>
        </Modal>
    </div>
  );
}

export default EventNews;

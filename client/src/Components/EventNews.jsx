import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./GallerySlickVideo.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Typography, Modal, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { API } from "../service/api";

function EventNews({ isAdmin }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await API.getNews(); 
        console.log(response)
        if (response.isSuccess) {
          const imageUrls = response.data.map(event => event.image);
          setImages(imageUrls);
        } else {
          console.error('Error fetching events:', response.msg);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchImages();
  }, []);

  const handleOpen = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleDelete = async (image) => {
    try {
      const response = await API.deleteNews({ image });
      if (response.isSuccess) {
        setImages(images.filter(img => img !== image));
      } else {
        console.error('Error deleting image:', response.msg);
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="container">
      <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "5px" }}>
        <Typography style={{ fontSize: "30px", fontWeight: "bold" }} className="head">
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
          <SwiperSlide key={index}>
            <div style={{ position: "relative" }}>
              <img
                src={`http://localhost:8000/${image}`} // Adjust the base URL as per your backend setup
                alt={index}
                onClick={() => handleOpen(image)}
                style={{ width: "100%", cursor: "pointer" }}
              />
              {isAdmin && (
                <IconButton
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.7)"
                  }}
                  onClick={() => handleDelete(image)}
                >
                  <Delete />
                </IconButton>
              )}
            </div>
          </SwiperSlide>
        ))}
        
        <div className="slider-controler">
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
          margin: "20px"
        }}
      >
        <div>
          {/* adjust the url of the backend here */}
          <img src={`http://localhost:8000/${selectedImage}`} alt="" style={{ maxWidth: "100%", maxHeight: "100%"}} />
        </div>
      </Modal>
    </div>
  );
}

export default EventNews;

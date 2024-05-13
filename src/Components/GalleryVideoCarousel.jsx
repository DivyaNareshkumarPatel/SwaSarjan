import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./GalleryVideoCarousel.css";

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

const GalleryVideoCarousel = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [slideIndex, setSlideIndex] = useState(0);

  const NextArrow = ({ onClick }) => (
    <div
      className="arrow next"
      onClick={() => handleArrowClick("next", onClick)}
    >
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="arrow prev"
      onClick={() => handleArrowClick("prev", onClick)}
    >
      <FaArrowLeft />
    </div>
  );

  const handleArrowClick = (direction, onClick) => {
    if (direction === "next") {
      setSlideIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "prev") {
      setSlideIndex((prevIndex) =>
        prevIndex === 0 ? videos.length - 1 : prevIndex - 1
      );
    }
    onClick();
  };

  const getVideoSize = (index) => {
    const distance = Math.min(
      Math.abs(index - slideIndex),
      videos.length - Math.abs(index - slideIndex)
    );
    if (distance === 0) return 1.4; // Largest
    if (distance === 1) return 1.2; // Slightly smaller
    return 1; // Smallest
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5, // Show more than three videos
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setHoverIndex(-1), // Reset hover state when sliding
    afterChange: (current) => setSlideIndex(current), // Update current slide index
  };

  return (
    <div className="gallery-carousel-container">
      <Slider {...settings} initialSlide={slideIndex}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`carousel-video ${index === slideIndex ? "active" : ""}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{
              transform: `scale(${getVideoSize(index)})`,
            }}
          >
            <div className="video-container">
              <iframe
                title={`Video ${video.id}`}
                src={`${video.src}&modestbranding=1`} // Add the modestbranding parameter
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="560"
                height="315"
              ></iframe>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GalleryVideoCarousel;

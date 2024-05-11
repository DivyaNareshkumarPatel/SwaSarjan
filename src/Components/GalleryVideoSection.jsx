import React from "react";
import { Box, Typography, styled } from "@mui/material";

// Styled component for the 3D video container
const VideoContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "400px",
});

// Styled component for the video frame
const VideoFrame = styled("iframe")({
  width: "100%",
  height: "100%",
  border: "none",
  position: "absolute",
  top: 0,
  left: 0,
  transform: "rotateY(0deg)", // Initial rotation
  transition: "transform 0.5s", // Smooth transition effect
});

// Styled component for the video overlay
const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  opacity: 0,
  transition: "opacity 0.5s", // Smooth transition effect
});

// Styled component for the video title
const VideoTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
});

// Component for the 3D video section
const GalleryVideoSection = ({ videos }) => {
    const handleMouseEnter = (event) => {
      event.currentTarget.style.transform = "rotateY(20deg)";
      event.currentTarget.nextSibling.style.opacity = 1;
    };
  
    const handleMouseLeave = (event) => {
      event.currentTarget.style.transform = "rotateY(0deg)";
      event.currentTarget.nextSibling.style.opacity = 0;
    };
  
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {videos.map((video, index) => (
          <VideoContainer key={index}>
            <VideoFrame
              src={video.src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></VideoFrame>
            <Overlay>
              <VideoTitle>{video.title}</VideoTitle>
            </Overlay>
          </VideoContainer>
        ))}
      </div>
    );
  };
  
  
export default GalleryVideoSection;

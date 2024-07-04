import React, { useState, useEffect, useMemo } from "react";
import Carousel from "react-material-ui-carousel";
import ModelVideo from "./ModelVideo";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function VideoGallery() {
  const [size, setSize] = useState(5);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoTitles, setVideoTitles] = useState({});
  const videos = useMemo(() => [
    {
      src: "https://www.youtube.com/embed/MBqdXGsjJ74?si=WIxzbqhBb7HeXQq2",
    },
    {
      src: "https://www.youtube.com/embed/_pJX3Wewazs?si=MDqCiJtiRZSUJvn_",
    },
    {
      src: "https://www.youtube.com/embed/0Miqj9XLL3U?si=mrAFnMiWu4YUqDbd",
    },
    {
      src: "https://www.youtube.com/embed/qW8GsNSM1VM?si=sbd0T3viaCkAI4Jg",
    },
    {
      src: "https://www.youtube.com/embed/YLha-22YAWM?si=4X0Hx1nA_v6RihPG",
    },
    {
      src: "https://www.youtube.com/embed/Ozzr7C6u3iw?si=taK1jz-K03CML-fA",
    },
  ], []);

  const extractVideoId = (url) => {
    const match = url.match(/(?:embed\/|v=)([^?&]+)/);
    return match && match[1];
  };

  const chunkVideos = (videos, size) => {
    const chunkedArray = [];
    for (let i = 0; i < videos.length; i += size) {
      chunkedArray.push(videos.slice(i, i + size));
    }
    return chunkedArray;
  };

  const calculateChunkSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setSize(3);
    } else if (screenWidth >= 768) {
      setSize(2);
    } else {
      setSize(1);
    }
  };

  useEffect(() => {
    calculateChunkSize();
    window.addEventListener("resize", calculateChunkSize);
    return () => {
      window.removeEventListener("resize", calculateChunkSize);
    };
  }, []);

  useEffect(() => {
    const fetchTitles = async () => {
      const titles = {};
      for (const video of videos) {
        const videoId = extractVideoId(video.src);
        try {
          const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=YOUR_YOUTUBE_API_KEY&part=snippet`);
          const data = await response.json();
          console.log("API Response for", video.src, ":", data); 
          if (data.items && data.items.length > 0) {
            titles[video.src] = data.items[0].snippet.title;
          } else {
            titles[video.src] = "Untitled Video";
          }
        } catch (error) {
          console.error("Error fetching video details:", error);
          titles[video.src] = "Untitled Video";
        }
      }
      console.log("Updated Video Titles:", titles);
      setVideoTitles(titles);
    };
    fetchTitles();
  }, [videos]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseClick = () => {
    setSelectedVideo(null);
  };

  return (
    <div style={{ marginBottom: "20px", overflow: "auto" }}>
      <Carousel
        animation="slide"
        indicators
        timeout={500}
        navButtonsAlwaysVisible
        style={{ height: "100% !important" }}
      >
        {chunkVideos(videos, size).map((chunk, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              padding: "20px",
              paddingBottom: "1%",
            }}
          >
            {chunk.map((video, innerIndex) => (
              <div
                key={innerIndex}
                style={{ position: "relative", maxWidth: "450px" }}
              >
                <img
                  src={`https://img.youtube.com/vi/${extractVideoId(
                    video.src
                  )}/0.jpg`}
                  alt={`Thumbnail ${innerIndex}`}
                  style={{ width: "100%", height: "100%" }}
                  onClick={() => handleVideoClick(video)}
                />
                <div>{videoTitles[video.src] || "Untitled Video"}</div>
                <PlayArrowIcon
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: 50,
                    color: "rgba(255, 255, 255, 0.8)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleVideoClick(video)}
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
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

export default VideoGallery;
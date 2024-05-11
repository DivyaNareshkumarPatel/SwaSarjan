import React from 'react';
import GalleryVideoSection from './GalleryVideoSection';

const videos = [
    { src: "https://youtu.be/qW8GsNSM1VM", title: "Video 1" },
    { src: "https://youtu.be/YLha-22YAWM", title: "Video 2" },
    { src: "https://youtu.be/Ozzr7C6u3iw", title: "Video 3" },
    { src: "https://youtu.be/_pJX3Wewazs", title: "Video 4" },
  ];
  
  const GalleryVideoPlayer = () => {
    return (
      <div>
        <h1>Gallery of 3D Videos</h1>
        <GalleryVideoSection videos={videos} />
      </div>
    );
  };
  
  export default GalleryVideoPlayer;
  

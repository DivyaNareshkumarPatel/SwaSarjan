import React from "react";

export default function Campaign2Video() {
  return (
    <div style={{margin:"40px"}}>
      <div style={{ background: "white"}}>
        <iframe
          title="Video"
          src="https://www.youtube.com/embed/MBqdXGsjJ74?si=WIxzbqhBb7HeXQq2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "400px", borderRadius:"20px" }}
        />
      </div>
    </div>
  );
}

import React from "react";
import { Modal } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

const ModelVideo = ({ selectedVideo, handleCloseClick }) => {
  return (
    <Modal
      open={selectedVideo !== null}
      onClose={handleCloseClick}
      className="modal"
    >
      <div
        className="modal-container"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{background:"white", width:"80%", height:"80%"}}>
          <iframe
            title={selectedVideo.title}
            src={selectedVideo.src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{width:"100%", height:"100%"}}
          />
          <CloseIcon
            onClick={handleCloseClick}
            className="close-icon"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1000,
              cursor:"pointer"
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModelVideo;

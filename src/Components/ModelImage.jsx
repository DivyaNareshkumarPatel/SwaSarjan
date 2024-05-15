import React from "react";
import { Modal } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

const ModelImage = ({ selectedImage, handleCloseClick }) => {
  return (
    <Modal
      open={selectedImage !== null}
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
        <div style={{background:"white", width:"70%", height:"70%"}}>
          <img src={selectedImage.src} alt="" style={{height:"100%", width:"100%"}}/>
          <CloseIcon
            onClick={handleCloseClick}
            className="close-icon"
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              zIndex: 1000,
              cursor:"pointer",
              color:"white",
              padding:"5px",
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModelImage;

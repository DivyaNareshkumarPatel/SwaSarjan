import React, { useState } from "react";
import { Modal } from "@mui/material";
import Masonry from "react-responsive-masonry";
import image1 from "../images/image1.png";
import image3 from "../images/image3.png";
import image7 from "../images/image7.png";
import image9 from "../images/image9.png";
import image13 from "../images/image13.png";
import image14 from "../images/image14.png";
import image16 from "../images/image16.png";
import image18 from "../images/image18.png";

const images = [
  image1,
  image3,
  image9,
  image13,
  image3,
  image14,
  image7,
  image18,
  image16,
];

const Campaign2Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div style={{ margin: "25px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
        </div>
        <Masonry columnsCount={3} gutter="10px">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block", cursor: "pointer" }}
              alt=""
              onClick={() => handleOpen(image)}
            />
          ))}
        </Masonry>
        <Modal
          open={!!selectedImage}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              src={selectedImage}
              alt=""
              style={{ maxWidth: "90%", maxHeight: "90%" }}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Campaign2Gallery;

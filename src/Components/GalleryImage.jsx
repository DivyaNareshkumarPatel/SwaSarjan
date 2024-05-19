import React, { useState } from "react";
import { Typography, Modal } from "@mui/material";
import Masonry from "react-responsive-masonry";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.png";
import image10 from "../images/image10.png";
import image11 from "../images/image11.png";
import image13 from "../images/image13.png";
import image14 from "../images/image14.png";
import image15 from "../images/image15.png";
import image16 from "../images/image16.png";
import image17 from "../images/image17.png";
import image18 from "../images/image18.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image14,
  image6,
];

const GalleryImage = () => {
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
          <Typography
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className="head"
          >
            Photo Gallery
          </Typography>
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
            <img src={selectedImage} alt="" style={{ maxWidth: "90%", maxHeight: "90%" }} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default GalleryImage;

import React, { useState } from "react";
import { ImageList, ImageListItem, Modal, Box, IconButton, styled } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image8 from '../images/image8.png';
import image9 from '../images/image9.png';
import image10 from '../images/image10.png';
import image11 from '../images/image11.png';
import image12 from '../images/image12.png';
import image13 from '../images/image13.png';
import image14 from '../images/image14.png';
import image15 from '../images/image15.png';
import image16 from '../images/image16.png';
import image17 from '../images/image17.png';
import image18 from '../images/image18.png';

// Define your images
const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, 
  image10, image11, image12, image13, image14, image15, image16, image17, image18
];

const MainContainer = styled(Box)({
    maxWidth:'90%',
    marginLeft:'60px',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    display:'flex'
});

const CloseIconButton = styled(IconButton)({
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: 1, // Ensure the icon is above the image
  background: "#F26522",
  color: "#FFFFFF",
  borderRadius: "0 0 0 12px", // Adjust border radius to match the modal
});

const GalleryImageList = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <MainContainer>
      <ImageList cols={3} gap={8}>
        {images.map((image, index) => (
          <ImageListItem key={index} onClick={() => handleOpen(image)}>
            <img src={image} alt={`Image ${index + 1}`} />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <Box sx={{ position: "relative" }}>
            <CloseIconButton onClick={handleClose}>
              <CloseIcon />
            </CloseIconButton>
            {selectedImage && <img src={selectedImage} alt="Selected Image" style={{ maxWidth: "100%", maxHeight: "100%" }} />}
          </Box>
        </Box>
      </Modal>
      </MainContainer>  
  );
};

export default GalleryImageList;

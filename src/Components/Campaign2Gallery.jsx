import React from "react";
import { Typography } from "@mui/material";
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
  image16
];

class Campaign2Gallery extends React.Component {
  render() {
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
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </div>
      </div>
    );
  }
}
export default Campaign2Gallery;

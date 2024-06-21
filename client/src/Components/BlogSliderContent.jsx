import React from "react";
import account from "../images/account.png";
import { Typography } from "@mui/material";
import star from "../images/star.png";
import "./BlogSlider.css";
export default function BlogSliderContent() {
  return (
    <div className="s">
      <div>
        <div>
          <img src={account} alt="" className="img1"/>
        </div>
        <div>
          <Typography>Leo</Typography>
          <Typography>Lead Designer</Typography>
        </div>
        <div>
          <img src={star} alt="" className="img2"/>
        </div>
      </div>
      <div>
        <Typography>It was a very good experience</Typography>
      </div>
      <div>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim arcu. Elementum felis
          magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis.
          Consequat duis diam lacus arcu.
        </Typography>
      </div>
    </div>
  );
}

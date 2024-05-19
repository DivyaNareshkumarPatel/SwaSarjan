import React from "react";
import account from "../images/account.png";
import { Typography } from "@mui/material";
import star from "../images/star.png";
export default function BlogSliderContent() {
  return (
    <div>
      <div>
        <div>
          <img src={account} alt="" style={{width:"50px", height:"50px"}}/>
        </div>
        <div>
          <Typography>Leo</Typography>
          <Typography>Lead Designer</Typography>
        </div>
        <div>
          <img src={star} alt="" style={{width:"120px", height:"20px", borderRadius:"0px"}}/>
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

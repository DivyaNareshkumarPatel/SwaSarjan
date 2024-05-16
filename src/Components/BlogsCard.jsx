import { Typography } from "@mui/material";
import React from "react";

export default function BlogsCard({ details }) {
  return (
    <div style={{ width: "250px", margin: "5px", border:"1px solid #D3D3D3", padding:"10px", borderRadius:"5px"}}>
      <div>
        <div>
          <img src={details.blog} alt="" style={{ width: "250px", borderRadius:"5px" }} />
        </div>
        <div style={{margin:"5px"}}>
          <Typography style={{fontSize:"12px", color:'#4B6BFB', background:"#d8ebfb", display:"inline-block", padding:"3px", borderRadius:"2px"}}>SwaSarjan</Typography>
        </div>
        <div style={{margin:"5px"}}>
          <Typography sx={{fontSize:"1.2em", fontWeight:"bold"}}>{details.head}</Typography>
        </div>
        <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", margin:"5px"}}>
          <div>
            <img src={details.account} style={{width:"30px", borderRadius:"50px", marginRight:"8px"}} alt="" />
          </div>
          <div>
            <Typography sx={{fontSize:"12px", color:"grey", marginRight:"8px"}}>{details.name}</Typography>
          </div>
          <div>
            <Typography sx={{fontSize:"12px", color:"grey", marginRight:"8px"}}>{details.date}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

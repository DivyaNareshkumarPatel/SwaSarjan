import { Typography } from "@mui/material";
import React from "react";

export default function BlogsCard({ details }) {
  const image = `http://localhost:8000/${details.image}`;

  return (
    <div style={{ 
      width: "250px", 
      margin: "5px", 
      border: "1px solid #D3D3D3", 
      padding: "10px", 
      borderRadius: "5px",
      minHeight: "400px",  
      maxHeight: "400px",  
      overflow: "auto"     
    }}>
      <div>
        <div>
          <img src={image} alt={details.head} style={{ width: "100%", borderRadius: "5px" }} />
        </div>
        <div style={{ margin: "5px" }}>
          <Typography style={{ fontSize: "12px", color: '#4B6BFB', background: "#d8ebfb", display: "inline-block", padding: "3px", borderRadius: "2px" }}>SwaSarjan</Typography>
        </div>
        <div style={{ margin: "5px" }}>
          <Typography sx={{ fontSize: "1.2em", fontWeight: "bold" }}>{details.head}</Typography>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", margin: "5px" }}>
          <div>
            <img src={`http://localhost:8000/${details.account}`} style={{ width: "30px", borderRadius: "50px", marginRight: "8px" }} alt={details.name} />
          </div>
          <div>
            <Typography sx={{ fontSize: "12px", color: "grey", marginRight: "8px" }}>{details.author}</Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "12px", color: "grey", marginRight: "8px" }}>{details.date}</Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "12px", color: "grey", marginRight: "8px" }}>{details.title}</Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "12px", color: "grey", marginRight: "8px" }}>{details.content}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

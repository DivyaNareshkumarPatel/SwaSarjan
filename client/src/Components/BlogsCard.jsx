import { Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

export default function BlogsCard({ details, onCardClick, onDeleteClick, isAdmin }) {
  const image = `http://localhost:8000/${details.image}`;

  return (
    <div 
      style={{ 
        width: "250px", 
        margin: "5px", 
        border: "1px solid #D3D3D3", 
        padding: "10px", 
        borderRadius: "5px",
        minHeight: "400px",  
        maxHeight: "400px",  
        overflow: "hidden",
        cursor: "pointer",
        position: "relative"     
      }}
      onClick={() => onCardClick(details)}
    >
      {isAdmin && (
        <IconButton 
          style={{ 
            position: "absolute", 
            top: "10px", 
            right: "10px", 
            zIndex: 1 
          }}
          onClick={(e) => { 
            e.stopPropagation(); 
            onDeleteClick(details._id); 
          }}
        >
          <DeleteIcon />
        </IconButton>
      )}
      <div>
        <div>
          <img src={image} alt={details.head} style={{ width: "100%", maxHeight: '22vh', borderRadius: "5px" }} />
        </div>
        <div style={{ margin: "5px" }}>
          <Typography style={{ fontSize: "12px", color: '#4B6BFB', background: "#d8ebfb", display: "inline-block", padding: "3px", borderRadius: "2px" }}>SwaSarjan</Typography>
        </div>
        <div style={{ margin: "5px" }}>
          <Typography sx={{ fontSize: "1.2em", fontWeight: "bold" }}>{details.head}</Typography>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", margin: "5px" }}>
          <div style={{
            display:"flex" , justifyContent:"space-between" , alignItems:"center"  , margin:"10px 0"
          }}>
            <Typography sx={{ fontSize: "12px", color: "grey", marginRight: "8px", alignSelf:'flex-start' }}>{details.author}</Typography>
            <Typography sx={{ fontSize: "12px", color: "grey", marginRight: "8px", alignSelf:'flex-end' }}>{details.date}</Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "18px", fontWeight: 'bold', marginRight: "8px" }}>{details.title}</Typography>
          </div>
          <div>
            <Typography 
              sx={{ 
                fontSize: "12px", 
                color: "", 
                marginRight: "8px",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 7, 
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {details.content}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

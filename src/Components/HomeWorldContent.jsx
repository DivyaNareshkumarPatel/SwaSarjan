import React from 'react'
import { Typography } from '@mui/material'
export default function HomeWorldContent({heading, content}) {
  return (
    <div style={{display:"flex", margin:"30px", width:'230px'}}>
      <div style={{height:"100%", width:"3px" ,background: "linear-gradient(to bottom, #01BAE2, #01E2A2)", marginRight:"15px"}}></div>
      <div>
      <Typography
          variant="h3"
          style={{ fontWeight: "bold", fontSize: "1.5em", marginBottom: "10px" }}
        >{heading}</Typography>
        <Typography style={{fontSize:"12px", color:"#52525B"}}>{content}</Typography>
      </div>
    </div>
  )
}

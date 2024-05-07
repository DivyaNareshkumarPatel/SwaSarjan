import React from 'react'
import { Typography } from '@mui/material'
import linkedin from '../images/olinkedin.png'
import facebook from '../images/oFacebook.png'
import insta from '../images/oInstagram.png'
import youtube from '../images/oYoutube.png'
export default function AboutTeamProfile({image, name, profession}) {
  return (
    <div>
      <div><img src={image} style={{maxWidth:"370px", minWidth:"250px", width:"100%"}} alt="" /></div>
      <div style={{textAlign:"center"}}>
        <Typography style={{color:"#F26522", fontSize:"1.8em", fontWeight:"bold", marginTop:"20px"}}>{name}</Typography>
        <Typography style={{fontSize:"1.3em", fontWeight:"bold"}}>{profession}</Typography>
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div><img src={linkedin} style={{width:"40px", margin:"10px", cursor:"pointer"}} alt="" /></div>
        <div><img src={facebook} style={{width:"40px", margin:"10px", cursor:"pointer"}} alt="" /></div>
        <div><img src={insta} style={{width:"40px", margin:"10px", cursor:"pointer"}} alt="" /></div>
        <div><img src={youtube} style={{width:"40px", margin:"10px", cursor:"pointer"}} alt="" /></div>
      </div>
    </div>
  )
}

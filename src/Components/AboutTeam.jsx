import React from 'react'
import { Typography } from '@mui/material'
import AboutTeamProfile from './AboutTeamProfile'
import Bhumi from '../images/Bhumi.png'
import Kaushal from '../images/Kaushal.png'
export default function AboutTeam() {
  return (
    <div style={{margin:"40px"}}>
      <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <div><Typography style={{fontSize:"1.8em", fontWeight:"bold", marginBottom:"20px", marginLeft:"30px"}}>About Team</Typography></div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", flexWrap:"wrap"}}>
            <AboutTeamProfile image={Kaushal} name="Mr. Kaushal Gohil" profession="Founder & President" />
            <AboutTeamProfile image={Bhumi} name="Ms. Bhumi Sharma" profession="Vice President"/>
        </div>
      </div>
    </div>
  )
}

import React from "react";
import { styled, Grid, Typography } from "@mui/material";


const GridBox = styled(Grid)(({ theme }) => ({
    padding: '0px 0px 70px 0px',
    margin: '10px',
    display:'flex',
    flexDirection:'column',
    textAlign:'left',
    alignItems:'center',
    borderRadius: '10px',
    width:'100%',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  }));

  const Title = styled(Typography)({
    color:'#FFFFFF',
    paddingTop:'10px',
    textAlign:'left',
    marginBottom:'20px'
  });


const ContactUsMap = () => {
    return(
        <Grid style={{}} item xs={12} sm={6} md={4} lg={4}>
            <Grid container spacing={2}>
                <GridBox style={{backgroundColor:'#0C0C0C'}}>
                    <Title variant="h4" style={{textAlign:'left'}}>~ Our Location</Title>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3672.7506875289723!2d72.5970877!3d22.9961936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e852704503d11%3A0x493089e091ce9f26!2sSwa%20Sarjan%20Foundation!5e0!3m2!1sen!2sin!4v1715086136314!5m2!1sen!2sin" 
                    width="80%" title="Location Map" style={{borderRadius:'10px'}} height="500px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </GridBox>
            </Grid>
        </Grid>
    )
}

export default ContactUsMap;
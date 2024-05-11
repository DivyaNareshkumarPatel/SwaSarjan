import React from "react";
import { Box, Typography , styled , Button , Grid} from "@mui/material";
import AboutGalleryPhoto from '../images/AboutGalleryPhoto.png';
import { Link } from "react-router-dom";

const BlackBox = styled(Box)({
    backgroundColor:'#0C0C0C',
    textAlign: 'center',
    paddingBottom:'100px',
    marginBottom:'35px'
});

const Container = styled(Grid)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
});

const SmallTitle = styled(Typography)({
    margin: '0px 60px',
    color:'#FFFFFF',
    textAlign:'left',
    display:'flex'
    // fontWeight:'bolder'
});

const LargeTitle = styled(Typography)({
    margin: '0px 60px',
    color:'#FFFFFF',
    textAlign:'left',
    fontWeight:'bolder'
});

const ViewButton = styled(Button)({
    margin: '60px 60px',
    textAlign: 'left', // Align the button to the left
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: '30px',
    fontSize: '18px',
    padding:'5px 25px',
    '&:hover': {
        backgroundColor:'#FFFFFF',
        color:'#0C0C0C',
        borderColor: '#FFFFFF'
    }
});

const AboutGallery = () => {
    return(
        <BlackBox>
            <Container container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box style={{textAlign:'left',paddingLeft:'70px'}} p={{ xs: 3, md: 4 }}>
                        <SmallTitle variant="h4">Check out</SmallTitle>
                        <LargeTitle variant="h3">Our Gallery</LargeTitle>
                        <Link to='/gallery'><ViewButton variant="outlined">View Gallery</ViewButton></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="flex-end" p={{ xs: 3, md: 4 }}>
                        <img src={AboutGalleryPhoto} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                </Grid>
            </Container>
        </BlackBox>
    )
}

export default AboutGallery;

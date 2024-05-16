import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '../images/Facebook.png';
import InstagramIcon from '../images/Instagram.png';
import YouTubeIcon from '../images/Youtube.png';
import LinkedinIcon from '../images/linkedin.png'
import { Link } from 'react-router-dom';

const FooterContainer = styled(Box)({
  backgroundColor: '#181818',
  color: '#FFFFFF',
  padding: '40px',
  paddingTop:"60px",
  borderTop: '1px solid #FFFFFF',
});

const FooterGrid = styled(Grid)({
  textAlign: 'center',
  display :"flex",
  justifyContent:"space-around",
  width:"100%"
});

const FooterItem = styled(Box)({
  textAlign: 'left',
  padding:"20px 60px"
});

const FooterHeader = styled(Typography)({
  color: '#F26522',
  fontSize: '1.5rem',
  marginBottom: '20px',
});

const FooterContent = styled(Typography)({
  color: '#FFFFFF',
  fontSize: '1rem',
});

const SocialIconButton = styled(IconButton)(({ theme, color }) => ({
  backgroundColor: '#181818',
  color: color, // Use the color prop here
  borderRadius: '50%',
  // padding: '5px',
  margin: '0 2px',
  '&:hover': {
    backgroundColor: '#A9A9A9',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid container spacing={3} justifyContent="center">
        <FooterItem item xs={12} sm={4}>
          <FooterHeader>About Us</FooterHeader>
          <Link to='/about' style={{textDecoration:'none'}}><FooterContent>About SwaSarjan</FooterContent></Link>
          <FooterContent>Impact</FooterContent>
          <FooterContent>Reach & Presence</FooterContent>
          <Link to='/blogs' style={{textDecoration:'none'}}><FooterContent>Blogs</FooterContent></Link>
        </FooterItem>
        <FooterItem item xs={12} sm={4}>
          <FooterHeader>Get Involved</FooterHeader>
          <FooterContent>Individual Support</FooterContent>
          <FooterContent>Corporate Partnership</FooterContent>
          <Link to='/registration' style={{textDecoration:'none'}}><FooterContent>Member</FooterContent></Link>
        </FooterItem>
        <FooterItem item xs={12} sm={4}>
          <FooterHeader>Resource Center</FooterHeader>
          <FooterContent>Annual Report</FooterContent>
          <FooterContent>Newsletter</FooterContent>
          <FooterContent>Stories of Change</FooterContent>
          <FooterContent>Films</FooterContent>
        </FooterItem>
      </FooterGrid>
      <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
        <SocialIconButton>
          <img src={LinkedinIcon} alt="" style={{width:"40px"}} />
        </SocialIconButton>
        <SocialIconButton>
          <img src={FacebookIcon} alt="" style={{width:"40px"}} />
        </SocialIconButton>
        <SocialIconButton>
          <img src={InstagramIcon} alt="" style={{width:"40px"}} />
        </SocialIconButton>
        <SocialIconButton>
          <img src={YouTubeIcon} alt="" style={{width:"40px"}} />
        </SocialIconButton>
      </Box>
      <Typography variant="body2" align="center" color="#A9A9A9">Copyright © 2024 SwaSarjan</Typography>
      <Typography variant="body2" align="center" color="#A9A9A9">All Rights Reserved.</Typography>
    </FooterContainer>
  );
};

export default Footer;

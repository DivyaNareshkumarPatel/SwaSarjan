import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterContainer = styled(Box)({
  backgroundColor: '#181818',
  color: '#FFFFFF',
  padding: '40px',
  borderTop: '1px solid #FFFFFF',
});

const FooterGrid = styled(Grid)({
  textAlign: 'center',
});

const FooterItem = styled(Grid)({
  textAlign: 'left',
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
  padding: '5px',
  margin: '0 10px',
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
          <FooterContent>About SwaSarjan</FooterContent>
          <FooterContent>Impact</FooterContent>
          <FooterContent>Reach & Presence</FooterContent>
          <FooterContent>Blogs</FooterContent>
        </FooterItem>
        <FooterItem item xs={12} sm={4}>
          <FooterHeader>Get Involved</FooterHeader>
          <FooterContent>Individual Support</FooterContent>
          <FooterContent>Corporate Partnership</FooterContent>
          <FooterContent>Member</FooterContent>
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
        <SocialIconButton color="#1877F2">
          <FacebookIcon sx={{ fontSize: '40px' }} />
        </SocialIconButton>
        <SocialIconButton color="#1DA1F2">
          <TwitterIcon sx={{ fontSize: '40px' }} />
        </SocialIconButton>
        <SocialIconButton color="#C13584">
          <InstagramIcon sx={{ fontSize: '40px' }} />
        </SocialIconButton>
        <SocialIconButton color="#ff0000">
          <YouTubeIcon sx={{ fontSize: '40px' }} />
        </SocialIconButton>
      </Box>
      <Typography variant="body2" align="center" color="#A9A9A9">Copyright © 2024 SwaSarjan</Typography>
      <Typography variant="body2" align="center" color="#A9A9A9">All Rights Reserved.</Typography>
    </FooterContainer>
  );
};

export default Footer;

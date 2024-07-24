import React , {useState} from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import FacebookIcon from '../images/Facebook.png';
import InstagramIcon from '../images/Instagram.png';
import YouTubeIcon from '../images/Youtube.png';
import LinkedinIcon from '../images/linkedin.png'
import NewsletterModal from './NewsletterModal';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TempApplicant from './temp.applicant';

const FooterContainer = styled(Box)({
  backgroundColor: '#181818',
  color: '#FFFFFF',
  padding: '40px',
  paddingTop:"60px",
  borderTop: '1px solid #FFFFFF',
  textAlign:'left'
});

const FooterGrid = styled(Grid)(({ theme }) =>({
  textAlign: 'left',
  display :"flex",
  justifyContent:"space-around",
  width:"100%",
  [theme.breakpoints.down("sm")]: {
    justifyContent:"flex-start",
  },
  [theme.breakpoints.down("xs")]: {
    justifyContent:"flex-start",
  },
  
}));

const FooterItem = styled(Box)({
  textAlign: 'left',
  padding:"20px 60px",
  textAlign: 'left',
});

const FooterHeader = styled(Typography)({
  color: '#F26522',
  fontSize: '1.5rem',
  marginBottom: '20px',
  textAlign:'left'
});

const FooterContent = styled(Typography)({
  color: '#FFFFFF',
  fontSize: '1rem',
  textAlign:'left'
});

const SocialIconButton = styled(IconButton)(({ theme, color }) => ({
  backgroundColor: '#181818',
  color: color, 
  borderRadius: '50%',
  // padding: '5px',
  margin: '0 2px',
  '&:hover': {
    backgroundColor: '#A9A9A9',
  },
}));



const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const [modalOpenMember, setModalOpenMember] = useState(false);
  const handleOpenMember = () => setModalOpenMember(true);
  const handleCloseMember = () => setModalOpenMember(false);
  return (
    <FooterContainer>
      <FooterGrid container spacing={3} justifyContent="left">
        <FooterItem item xs={12} sm={4}>
          <FooterHeader>About Us</FooterHeader>
          <Link to='/' style={{textDecoration:'none'}}><FooterContent>Home</FooterContent></Link>
          <Link to='/about' style={{textDecoration:'none'}}><FooterContent>About SwaSarjan</FooterContent></Link>
          
          {/* <FooterContent>Reach & Presence</FooterContent> */}
          <Link to='/blogs' style={{textDecoration:'none'}}><FooterContent>Blogs</FooterContent></Link>
        </FooterItem>
        <FooterItem item xs={12} sm={4}>
          <FooterHeader>Get Involved</FooterHeader>
          {/* <FooterContent>Individual Support</FooterContent> */}
          <TempApplicant open={modalOpenMember} handleClose={handleCloseMember} />
          <FooterContent onClick={handleOpenMember} style={{ cursor: 'pointer', color: '' }}>Member</FooterContent>
          <Link to='/Privacypolicy' style={{textDecoration:'none'}}><FooterContent>Privacy Policy</FooterContent></Link>
          <Link to='/termsandconditions' style={{textDecoration:'none'}}><FooterContent>Terms & Conditions</FooterContent></Link>
        </FooterItem>
        <FooterItem item xs={12} sm={4}>
          <FooterHeader>Resource Center</FooterHeader>
          <Link to='/campaign' style={{textDecoration:'none'}}><FooterContent>Our Campaigns</FooterContent></Link>
    
            <FooterContent onClick={handleOpen} style={{ cursor: 'pointer', color: '' }}>Newsletter</FooterContent>
       
            <NewsletterModal open={modalOpen} handleClose={handleClose} />
          
          <Link to='/events' style={{textDecoration:'none'}}><FooterContent>Events</FooterContent></Link>
          <Link to='/gallery' style={{textDecoration:'none'}}><FooterContent>Our Gallery</FooterContent></Link>
        </FooterItem>
        <FooterItem item xs={12} sm={4}>
          <FooterHeader>Contact Details</FooterHeader>
          <Link to='/contact' style={{textDecoration:'none',}}><FooterContent style={{marginBottom:'10px'}}>Contact Us</FooterContent></Link>
          
          <Box style={{
            display:'flex',

          }}>
            <PhoneIcon style={{
              fontSize:'1rem',
              overflow:'none',
              marginRight:'5px'
            }}/>
            <FooterContent style={{
              fontSize:'0.8rem',
              overflow:'none'
            }}>+91 704 303 8000</FooterContent>
          </Box>

          <Box style={{
            display:'flex',

          }}>

            <LocalPostOfficeIcon style={{
              fontSize:'1rem',
              overflow:'none',
              marginRight:'5px'
            }}/>
            <FooterContent style={{
              fontSize:'0.8rem',
              overflow:'none'
            }}>swasarjan@gmail.com</FooterContent>

          </Box>

          <Box
            style={{
              display:'flex',
            }}>

            <LocationOnIcon style={{
              fontSize:'1rem',
              overflow:'none',
              marginRight:'5px'
            }}/>

            <FooterContent style={{
              fontSize:'0.6rem',
              overflow:'none'
            }}> A/10, Dwarkesh Appt,<br/> B/hPost Office, Rambagh,<br/> Maninagar, Ahmedabad,<br/>Gujarat 380008</FooterContent>
          
          </Box>

        </FooterItem>
      </FooterGrid>
      <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
        <SocialIconButton>
          <a href="https://in.linkedin.com/company/swa-sarjan-foundation"><img src={LinkedinIcon} alt="" style={{width:"40px"}} /></a>
        </SocialIconButton>
        <SocialIconButton>
          <a href="https://www.facebook.com/SwaSarjan/"><img src={FacebookIcon} alt="" style={{width:"40px"}} /></a>
        </SocialIconButton>
        <SocialIconButton>
          <a href="https://www.instagram.com/swa_sarjan/"><img src={InstagramIcon} alt="" style={{width:"40px"}} /></a>
        </SocialIconButton>
        <SocialIconButton>
          <a href="https://www.youtube.com/@SwaSarjanFoundation"><img src={YouTubeIcon} alt="" style={{width:"40px"}} /></a>
        </SocialIconButton>
      </Box>
      <Typography variant="body2" align="center" color="#A9A9A9">Copyright © 2024 SwaSarjan</Typography>
      <Typography variant="body2" align="center" color="#A9A9A9">All Rights Reserved.</Typography>
    </FooterContainer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, styled, TextField } from '@mui/material';

import { Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import LogoImage from './SwaLogoMain.png';

const Image = styled('img')({ height: 45, margin: 'auto', display: 'flex', padding: '5px 0 0' });
const Navbar1 = styled(AppBar)({ background: 'white', position:"static" });
const Wrapper = styled(Box)({ paddingLeft: '250px', display: 'flex', alignItems: 'center', flex: 1, marginLeft: '20px', marginRight: '20px', justifyItems: 'flex-end', justifyContent: 'space-evenly' });
const SearchWrapper = styled(Box)({ marginRight: '20px' });
const NavLink = styled(Typography)(({ isActive }) => ({ color: isActive ? '#f26522' : 'black', marginLeft: '20px', textDecoration: 'none', cursor: 'pointer', position: 'relative', '&::after': { content: '""', position: 'absolute', left: 0, bottom: '-3px', width: '0', borderBottom: '2px solid #f26522', transition: 'width 0.3s ease', }, '&:hover::after': { width: '100%', }, }));

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <Box>
      <Navbar1>
        <Toolbar>
          <Box><Image src={LogoImage} alt="Logo" /></Box>
          <Wrapper>
            <NavLink variant="h6" isActive={activeMenu === 'Home'} onClick={() => setActiveMenu('Home')}>Home</NavLink>
            <NavLink variant="h6" isActive={activeMenu === 'About'} onClick={() => setActiveMenu('About')}>About</NavLink>
            <NavLink variant="h6" isActive={activeMenu === 'Campaign'} onClick={() => setActiveMenu('Campaign')}>Campaign</NavLink>
            <NavLink variant="h6" isActive={activeMenu === 'Event'} onClick={() => setActiveMenu('Event')}>Event</NavLink>
            <NavLink variant="h6" isActive={activeMenu === 'Contact'} onClick={() => setActiveMenu('Contact')}>Contact</NavLink>
            <NavLink variant="h6" isActive={activeMenu === 'Registration'} onClick={() => setActiveMenu('Registration')}>Registration</NavLink>
          </Wrapper>
          <SearchWrapper>
            <TextField variant="outlined" size="small" placeholder="Search..." />
            <IconButton color="dark" paddingLeft="10px"><SearchIcon /></IconButton>
          </SearchWrapper>
          <IconButton color="dark"><AccountCircleIcon /></IconButton>
        </Toolbar>
      </Navbar1>
    </Box>
  );
}

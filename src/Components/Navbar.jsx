import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  styled,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import LogoImage from "../images/SwaLogoMain.png";
import { Link } from "react-router-dom";
const Image = styled("img")({
  height: 45,
  margin: "auto",
  display: "flex",
  padding: "5px 0 0",
});
const Navbar1 = styled(AppBar)({ background: "white", position: "static" });
const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flex: 1,
});
const NavLink = styled(Typography)(({ isActive }) => ({
  color: isActive ? "#f26522" : "black",
  marginLeft: "20px",
  marginRight: "20px",
  textDecoration: "none",
  cursor: "pointer",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-3px",
    width: "0",
    borderBottom: "2px solid #f26522",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Home", to: "/", onClick: () => setActiveMenu("Home") },
    { text: "About", to: "/about", onClick: () => setActiveMenu("About") },
    {
      text: "Campaign",
      to: "/campaign",
      onClick: () => setActiveMenu("Campaign"),
    },
    {
      text: "Gallery",
      to: "/gallery",
      onClick: () => setActiveMenu("Gallery"),
    },
    // { text: 'Event', onClick: () => setActiveMenu('Event') },
    { text: "Events", to: "/events", onClick: () => setActiveMenu("About") },
    {
      text: "Contact",
      to: "/contact",
      onClick: () => setActiveMenu("Contact"),
    },
    {
      text: "Registration",
      to: "/registration",
      onClick: () => setActiveMenu("Registration"),
    },
  ];

  return (
    <Box>
      <Navbar1>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ flex: "1", display: "flex", justifyContent: "space-between" }}
          >
            <Link to="/">
              <div>
                <Image src={LogoImage} alt="Logo" sx={{ marginLeft: "auto" }} />
              </div>
            </Link>
          </Box>
          <Wrapper sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="black" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleMenuClose();
                    item.onClick();
                  }}
                >
                  <Link
                    to={item.to}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.text}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Wrapper>
          <Wrapper
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              flex: "2",
            }}
          >
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                fontFamily={""}
                variant="h7"
                isActive={activeMenu === item.text}
                onClick={item.onClick}
              >
                <Link
                  to={item.to}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.text}
                </Link>
              </NavLink>
            ))}
          </Wrapper>
          <Box>
            <IconButton color="#f26522" paddingLeft="5px">
              <SearchIcon />
            </IconButton>
            <IconButton color="dark">
              <Link to="/login">
                <AccountCircleIcon />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </Navbar1>
    </Box>
  );
}

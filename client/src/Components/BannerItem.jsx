import React from 'react';
import { Paper, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function BannerItem({ imgSrc }) {
  // Function to get responsive styles
  const getResponsiveStyles = () => {
    const isMobile = window.innerWidth <= 600;

    return {
      paper: {
        position: "relative",
        textAlign: "center",
        color: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: isMobile ? "50vh" : "91vh", // Adjust height based on screen size
        transition: "none",
      },
      content: {
        position: "absolute",
        top: "50%",
        left: isMobile ? "10%" : "5%", // Adjust alignment for mobile
        transform: "translateY(-50%)",
        textAlign: isMobile ? "center" : "left", // Center align text on mobile
      },
      spanText: {
        fontWeight: "bold",
        fontSize: isMobile ? "28px" : "35px", // Adjust font size for mobile
        color: "#F26522",
      },
      button: {
        borderRadius: "20px",
        margin: isMobile ? "10px" : "15px", // Adjust margin for mobile
      },
      typographyLarge: {
        fontSize: isMobile ? "1.5em" : "2em", // Adjust font size for large text on mobile
        maxWidth: "425px",
        marginLeft: isMobile ? "10px" : "15px",
        marginRight: isMobile ? "10px" : "15px",
        lineHeight: "1.1",
      },
      typographySmall: {
        fontSize: isMobile ? "0.9em" : "1em", // Adjust font size for small text on mobile
        maxWidth: "425px",
        fontWeight: "regular",
        marginTop: isMobile ? "20px" : "35px",
        marginBottom: isMobile ? "30px" : "40px",
        marginLeft: isMobile ? "10px" : "15px",
        marginRight: isMobile ? "10px" : "15px",
        lineHeight: "1.2",
      },
    };
  };

  const styles = getResponsiveStyles();

  return (
    <Paper
      style={{
        ...styles.paper,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgSrc})`,
      }}
    >
      <div style={styles.content}>
        <Typography
          variant="body1"
          style={styles.typographyLarge}
        >
          Share your <span style={styles.spanText}>Love</span> to make someone's
          life better
        </Typography>
        <Typography
          variant="body1"
          style={styles.typographySmall}
        >
          Swa-Sarjan is about helping people who need your help so that they can
          get back on their feet. We are dedicated to providing the needy with
          basic needs.
        </Typography>

        <Link to='/donate'>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            sx={{
              color: "white",
              backgroundColor: "#7622D7",
              "&:hover": {
                backgroundColor: "rgb(242, 101, 34)",
              },
            }}
          >
            Donate
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

export default BannerItem;

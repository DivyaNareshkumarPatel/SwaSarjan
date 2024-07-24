import React from "react";
import { Typography, Button } from "@mui/material";
import aboutSwa from "../images/aboutSwa.png";
import rocket from "../images/Rocket.png";
import bulb from "../images/bulb.png";
import logo from "../images/SwaLogoMain.png";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const SectionContainer = styled('div')(({ theme }) => ({
  background: "#0C0C0C",
  color: "white",
  display: "flex",
  padding: "40px",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  [theme.breakpoints.down('sm')]: {
    padding: "20px",
  },
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  marginTop: "40px",
  fontSize: "23px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "18px",
  },
}));

const FeatureContainer = styled('div')({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  marginTop: "40px",
});

const FeatureText = styled(Typography)(({ theme }) => ({
  maxWidth: "300px",
  marginLeft: "30px",
  fontSize: "18px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "14px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "2px",
  padding: "10px 15px",
  marginTop: "60px",
  marginBottom: "20px",
  color: "white",
  backgroundColor: "#7622D7",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: "40px",
  },
}));

const AboutSwaSarjan = () => {
  return (
    <div>
      <SectionContainer>
        <div style={{ flex: "1", maxWidth: "528px" }}>
          <Typography variant="h4" style={{ marginBottom: "20px", fontWeight: "500" }}>
            About SwaSarjan
          </Typography>
          <DescriptionText>
            Swa Sarjan Foundation is an International foundation recognized and registered under United Nations founded and leaded by Mr. Kaushal Gohil.
          </DescriptionText>
          <FeatureContainer>
            <div>
              <img src={rocket} alt="" style={{ width: "80px" }} />
            </div>
            <FeatureText>
              We look forward to work in as many as social problems and try to eradicate them & do what we can.
            </FeatureText>
          </FeatureContainer>
          <FeatureContainer>
            <div>
              <img src={bulb} alt="" style={{ width: "80px" }} />
            </div>
            <FeatureText>
              We develop, encourage and join youths to our organization for their self development and progress.
            </FeatureText>
          </FeatureContainer>
          <div>
            <StyledButton variant="contained">
              Our Team
            </StyledButton>
          </div>
        </div>
        <div style={{ flex: "1", maxWidth: "358px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "20px" }}>
          <img src={aboutSwa} alt="" style={{ maxWidth: "100%" }} />
          <div style={{ background: "white", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", height: "170px", width: "200px", borderRadius: "20px", marginTop: "-120px" }}>
            <img src={logo} alt="" style={{ width: "150px" }} />
            <br />
            <Link to="/contact">
              <Button variant="contained" sx={{ borderRadius: 20, color: "black", border: "black solid 1px", backgroundColor: "white", "&:hover": { backgroundColor: "black", color: "white" } }}>
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default AboutSwaSarjan;

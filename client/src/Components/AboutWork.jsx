import React, { useState } from "react";
import tick from "../images/tick.png";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import TempApplicant from "./temp.applicant";

const StyledBox = styled(Paper)(({ theme }) => ({
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  padding: "40px",
  width: "100%",
  maxWidth: "800px",
  margin: "10px",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "10px",
  },
  minWidth: "160px",
  textWrap: "wrap",
  maxWidth: "800px",
}));

const AboutWork = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <Box
      sx={{
        margin: "60px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledBox>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img
            src={tick}
            alt=""
            style={{ width: "30px", marginRight: "20px", marginLeft: "10px" }}
          />
          <Text>
            We look forward to work in as many as social problems and try to
            eradicate them.
          </Text>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img
            src={tick}
            alt=""
            style={{ width: "30px", marginRight: "20px", marginLeft: "10px" }}
          />
          <Text>
            We develop, encourage and join youths to our organization for their
            self development and progress.
          </Text>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img
            src={tick}
            alt=""
            style={{ width: "30px", marginRight: "20px", marginLeft: "10px" }}
          />
          <Text>
            We look forward to providing as many opportunities as we can.
          </Text>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img
            src={tick}
            alt=""
            style={{ width: "30px", marginRight: "20px", marginLeft: "10px" }}
          />
          <Text>
            We also provide Internships at our Foundation. We work in various sectors rather than focusing on a specific one.
          </Text>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img
            src={tick}
            alt=""
            style={{ width: "30px", marginRight: "20px", marginLeft: "10px" }}
          />
          <Text>
            We believe that we can achieve more together. Let's join hands for the same.
          </Text>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img
            src={tick}
            alt=""
            style={{ width: "30px", marginRight: "20px", marginLeft: "10px" }}
          />
          <Text>
            Almost Foundation has made a wonderful impact and created a legacy over the last 6 years. Currently, it operates in many countries around the globe and in many states of Incredible India.
          </Text>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img
            src={tick}
            alt=""
            style={{ width: "30px", marginRight: "20px", marginLeft: "10px" }}
          />
          <Text>
            If you wish to join any of our activities or our organization, connect with us! (You can join us from any corner of the world.)
          </Text>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <TempApplicant open={modalOpen} handleClose={handleClose} />
          <Button
            variant="contained"
            sx={{
              borderRadius: 20,
              color: "black",
              border: "black solid 1px",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            onClick={handleOpen}
          >
            Join Us
          </Button>
        </Box>
      </StyledBox>
    </Box>
  );
}

export default AboutWork;

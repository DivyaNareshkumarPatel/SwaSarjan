import { Typography, Box, Modal, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  maxHeight: '90vh',
  overflowY: 'auto',
};

export default function BlogModal({ open, handleClose, details }) {
  if (!details) return null;
  // adjust the url backend 
  const image = `http://localhost:8000/${details.image}`;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <IconButton
          sx={{ position: 'absolute', top: 10, right: 10 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <div>
          <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <img src={image} alt={details.head} style={{ width: "100%",maxWidth:'50vw',maxHeight:'50vh', borderRadius: "5px" }} />
          </div>
          <div style={{ margin: "20px 0" }}>
            <Typography sx={{ fontSize: "2em", fontWeight: "bold" }}>{details.title}</Typography>
          </div>
          <Box display="flex" justifyContent="space-between" alignItems="center" margin="10px 0">
            <Typography>
                <Typography style={{color: "grey",}}>by ,</Typography>
                <Typography sx={{ fontSize: "14px", color: "", background:'#CEF5D3', padding: "3px", borderRadius: "2px" }}>  {details.author}</Typography>
                <Typography style={{ marginTop:'1vh', color:'#f26522', fontSize:'0.8em',background:'#F6CDCD',display: "inline-block", padding: "3px", borderRadius: "2px", }}>{details.role}</Typography>
                </Typography>
            
            <Typography sx={{ fontSize: "14px", color: "grey" }}>{details.date}</Typography>
          </Box>
          <div>
            <Typography sx={{ fontSize: "16px",  margin: "20px 0", fontFamily:'cursive' }}>{details.content}</Typography>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

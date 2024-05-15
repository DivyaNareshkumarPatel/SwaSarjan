import { Typography , Box ,styled} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledBox = styled(Box)({
    maxWidth: "sm",
    fontSize:'20px',
    display:'flex',
    margin: "auto",
    alignItems:'center',
    justifyContent:'space-between',
    fontWeight:'unset',
    height:'80px',
    padding: "1.5rem",
    background: "linear-gradient(to bottom right, #F26522, #7622D7)",
    color: "#FFFFFF",
    borderRadius: "1rem",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)",
    marginBottom:'10px'
  });
const RegistrationOptions=()=>{
    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin:'0px 20px'
        }}>
            <div>   
            <Box
                height='auto'
                width={300}
                my={4}
                alignItems="center"
                justifyContent='center'
                gap={4}
                p={2}
                sx={{  borderRadius: ' 10px ' ,boxShadow: "0 0.3rem 0.3rem rgba(0, 0, 0, 0.1)",}}
                >
                <Typography variant="h5" style={{fontWeight:'bold',textAlign:'center',marginBottom:'20px'}}>Select the role</Typography>
                <StyledBox>Member<ArrowForwardIcon/></StyledBox>
                <StyledBox>Volunteer<ArrowForwardIcon/></StyledBox>
                <StyledBox>Internship<ArrowForwardIcon/></StyledBox>
            </Box>
            </div>
        </div>
    )
}

export default RegistrationOptions;
import { Typography , Box ,styled} from "@mui/material";
import React , {useState} from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import image3 from '../images/image3.png';
import LoginCommunity from "./LoginCommunity";
import Payment from "./Payment";
import Login from "../Pages/Login";
import { useNavigate } from "react-router-dom";


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
    const [selectedRole, setSelectedRole] = useState(null);
    const handleRoleSelection = (role) => {
        setSelectedRole(role);
    };

    const navigate = useNavigate();
    // console.log(selectedRole)
    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin:'0px 10px',
            display: "flex",
            height: "90vh",
        }}>
            {selectedRole === null ? <div
             style={{
                    position: "relative",
                    overflow: "hidden", 
                    padding: "10px",
                    borderRadius: "10px",
                    margin: "20px",
                    backgroundColor:'#FFFFFF'
                }}>   
                <img
                    src={image3}
                    alt="Background"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "blur(5px) brightness(0.8)",
                        // filter: 'brightness(0.8)', 
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                />
                <div style={{ 
                    position: "relative", 
                    zIndex: 1,
                    backgroundColor:'#FFFFFF',
                    borderRadius:'10px', 
                    display:'flex'                    
                    }}>        

                    <LoginCommunity style={{height:'100%'}} />
                    <Box
                        height=''
                        width={300}
                        alignItems="center"
                        justifyContent='center'
                        gap={4}
                        p={2}
                        sx={{  borderRadius: ' 10px '}}
                        >
                        <Typography variant="h5" style={{fontWeight:'bold',textAlign:'center',marginBottom:'20px'}}>Select the role</Typography>
                        <StyledBox onClick={() => handleRoleSelection('member')}>Member<ArrowForwardIcon/></StyledBox>
                        <StyledBox onClick={() => handleRoleSelection('volunteer')}>Volunteer<ArrowForwardIcon/></StyledBox>
                        <StyledBox onClick={() => handleRoleSelection('internship')}>Internship<ArrowForwardIcon/></StyledBox>
                    </Box>
                </div>
            </div> 
            : 
                selectedRole === 'member' ? <Payment/> : navigate('/login') 
            } 

        </div>
    )
}

export default RegistrationOptions;
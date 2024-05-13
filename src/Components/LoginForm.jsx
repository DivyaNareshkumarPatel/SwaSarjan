import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import {
  Typography,
  Button,
  styled,
  Radio,
  Snackbar,
} from "@mui/material";
import or from "../images/or.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function LoginForm() {
  const isMedium = useMediaQuery("(max-width:807px)");
  const [focusedInput, setFocusedInput] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const InputStyle = styled("input")({
    width: "100%",
    margin: "10px auto",
    height: "25px",
    borderRadius: "50px",
    border: "1px solid #CDCFD0",
    padding: "5px",
    "&:placeholder": {
      color: "#CDCFD0",
    },
  });

  const OrangeText = styled(Typography)({
    display: "contents",
    color: "#F26522",
    fontSize: "12px",
    cursor: "pointer",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "") {
      setError("Username is required.");
    } else if (password === "") {
      setError("Password is required.");
    } else if (mobileNumber === "") {
      setError("Mobile number is required.");
    } else if (otp === "") {
      setError("OTP is required.");
    } else {
      setOpenSnackbar(true);
      setError("")
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px 40px",
      }}
    >
      <div>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message="Login Successful!"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            style={{ fontSize: "20px", fontWeight: "bold", color: "#202325" }}
          >
            Register Your Account
          </Typography>
          <Typography
            style={{ color: "#6C7072", fontSize: "12px", marginBottom: "20px" }}
          >
            Register Yourself & let’s get started with SwaSarjan
          </Typography>
          <Button
            sx={{
              border: "1px black solid",
              width: "70%",
              borderRadius: "50px",
              color: "black",
              "&:hover": { background: "black", color: "white" },
            }}
          >
            Register Now
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <img src={or} alt="" style={{ width: "100%" }} />
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          {error && (
            <div
              style={{
                color: "white",
                background: "#FF7F7F",
                marginBottom: "15px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <ErrorIcon sx={{ marginRight: "5px" }} />
              <span>{error}</span>
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div>
              <InputStyle
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocusedInput('userName')}
                onBlur={() => setFocusedInput('')}
                autoFocus={focusedInput === 'userName'}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <InputStyle
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput('')}
                  autoFocus={focusedInput === 'password'}
                />
              </div>
              <div style={{ fontSize: "12px", color: "#202325" }}>
                Forgot password? <OrangeText>Need Help?</OrangeText>
              </div>
            </div>
            <div>
              <InputStyle
                type="tel"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                onFocus={() => setFocusedInput('mobileNumber')}
                onBlur={() => setFocusedInput('')}
                autoFocus={focusedInput === 'mobileNumber'}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <InputStyle
                  type="text"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  onFocus={() => setFocusedInput('otp')}
                  onBlur={() => setFocusedInput('')}
                  autoFocus={focusedInput === 'otp'}
                />
              </div>
              <div style={{ fontSize: "12px", color: "#202325" }}>
                Didn’t get OTP? <OrangeText>Resend it</OrangeText>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Radio
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                checkedIcon={<CheckCircleIcon style={{ color: "#F26522" }} />}
              />
              <span style={{ color: "#6C7072", fontSize: "12px" }}>
                Remember me for 30 days
              </span>
            </div>
            <div>
              <Button
                type="submit"
                sx={{
                  width: "100%",
                  background: "black",
                  color: "white",
                  margin: "10px auto",
                  borderRadius: "50px",
                  "&:hover": { background: "#011C2A" },
                }}
              >
                Login
              </Button>
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#202325",
                textAlign: "center",
              }}
            >
              Don’t have an account? <OrangeText>Register</OrangeText>
            </div>
          </form>
              <Link to='/gallery' style={{display:isMedium?"block":"none"}}>
                <Button variant="" style={{ color: "#F26522" ,fontSize:'10px', backgroundColor:'#FFFFFF' }} startIcon={<ArrowBackIcon style={{fontSize:'10px'}} />}>
                  Back to Home
                </Button>
                </Link>
        </div>
      </div>
    </div>
  );
}

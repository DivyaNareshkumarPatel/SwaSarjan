import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import OrangeLogo from "../images/Swa Icon Name Orange.png";
import { Typography, Button, Radio, TextField, Autocomplete, RadioGroup, FormControlLabel, FormControl, FormLabel,Snackbar } from "@mui/material";
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorIcon from "@mui/icons-material/Error";
import { API } from "../service/api";

export default function DonateForm() {
  const isMedium = useMediaQuery("(max-width:807px)");

  const [detail, setDetail] = useState({
    donationType: "general",
    amount: "",
    customAmount: "",
    phoneNumber:"",
    frequency: "oneTime"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {
      setDetail((prevDetail) => ({
        ...prevDetail,
        amount: value,
        customAmount: ""
      }));
    } else if(name === "customAmount"){
      setDetail((prevDetail) => ({
        ...prevDetail,
        amount: "",
        customAmount: value,
      }));
    } else {
      setDetail((prevDetail) => ({
        ...prevDetail,
        [name]: value
      }));
    }
  };

  const handleAutoCompleteChange = (event, value) => {
    setDetail((prevDetail) => ({
      ...prevDetail,
      donationType: value
    }));
  };

  // const handleCustomAmountChange = (e) => {
  //   const { name, value } = e.target;
  //   setDetail((prevDetail) => ({
  //     ...prevDetail,
  //     customAmount: value,
  //     amount: ""
  //   }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const finalAmount = detail.customAmount || detail.amount;
    console.log( detail );
    try{
      const response = await API.donateUs(detail);
    } catch(error){
      console.log('Error while donating',error)
    }
  };

  const DonationType = ["Education", "Women Empowerment", "Tree Plantation"];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        margin: "10px 0px 0px 0px",
        "@media (max-width: 600px)": {
          margin: "10px 80px 0px 80px",
        },
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignContent: "space-between",
            }}
          >
            <div>
              <img
                src={OrangeLogo}
                style={{
                  maxHeight: "50px",
                  maxWidth: "40px",
                  marginBottom: "20px",
                }}
                alt=""
              />
            </div>
            <div>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#202325",
                  marginBottom: "20px",
                }}
              >
                SwaSarjan Foundation
              </Typography>
              <Typography
                style={{
                  color: "#6C7072",
                  fontSize: "10px",
                  marginBottom: "20px",
                  maxWidth: "300px",
                }}
              >
                Welcome to SwaSarjan donation, please fill out the form below.
                Hopefully it is blessed.
              </Typography>
            </div>
          </div>

          <form style={{ margin: "10px 0px 0px 0px" }} action="/donate" method="post" onSubmit={handleSubmit}>
            <div>
              <Typography
                style={{
                  fontWeight: "lighter",
                  fontSize: "12px",
                  color: "GrayText",
                }}
              >
                Choose a donation type or none
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={DonationType}
                sx={{ width: 200 }}
                onChange={handleAutoCompleteChange}
                renderInput={(params) => (
                  <TextField {...params} label="Donation Type" variant="standard" />
                )}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                margin: "10px 0px",
              }}
            >
              <FormControl sx={{ width: "250px" }}>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "12px",
                    color: "GrayText",
                  }}
                >
                  Choose a donation amount
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={detail.amount}
                  onChange={handleChange}
                  name="amount"
                >
                  <FormControlLabel
                    value="100"
                    control={<Radio checkedIcon={<RadioButtonCheckedOutlinedIcon style={{ color: "#333333" }} />} />}
                    label="Rs. 100"
                  />
                  <FormControlLabel
                    value="500"
                    control={<Radio checkedIcon={<RadioButtonCheckedOutlinedIcon style={{ color: "#333333" }} />} />}
                    label="Rs. 500"
                  />
                  <FormControlLabel
                    value="1000"
                    control={<Radio checkedIcon={<RadioButtonCheckedOutlinedIcon style={{ color: "#333333" }} />} />}
                    label="Rs. 1000"
                  />
                </RadioGroup>
                <TextField
                  label="Enter custom amount"
                  variant="standard"
                  name="customAmount"
                  value={detail.customAmount}
                  onChange={handleChange}
                  sx={{ "& input": { fontSize: "16px" } }}
                />
                <TextField
                  label="Enter Phone Number"
                  variant="standard"
                  name="phoneNumber"
                  value={detail.phoneNumber}
                  onChange={handleChange}
                  sx={{ "& input": { fontSize: "16px" } }}
                />
              </FormControl>
            </div>
            <div>
              <FormControl component="fieldset">
                <FormLabel
                  component="legend"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "12px",
                    color: "GrayText",
                  }}
                >
                  Choose a donation frequency
                </FormLabel>
                <RadioGroup
                  aria-label="donation-frequency"
                  defaultValue="oneTime"
                  name="frequency"
                  onChange={handleChange}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="Monthly"
                    style={{
                      backgroundColor: "",
                      fontSize: "10px",
                      minWidth: "100px",
                      paddimg: "10px",
                      marginRight: "20px",
                    }}
                    control={<Radio checkedIcon={<RadioButtonCheckedOutlinedIcon style={{ color: "#333333" }} />} />}
                    label="Monthly"
                  />
                  <FormControlLabel
                    value="oneTime"
                    style={{
                      backgroundColor: "",
                      fontSize: "10px",
                      minWidth: "100px",
                    }}
                    control={<Radio checkedIcon={<RadioButtonCheckedOutlinedIcon style={{ color: "#333333" }} />} />}
                    label="One time"
                  />
                </RadioGroup>
              </FormControl>
              <Typography style={{ fontSize: "8px", color: "GrayText" }}>
                This will help a lot to the children and all people who need it
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  color: "#0C0C0C",
                  backgroundColor: "#FFFFFF",
                  borderColor: "#0C0C0C",
                  height: "30px",
                  width: "120px",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="outlined"
                style={{
                  backgroundColor: "#0C0C0C",
                  color: "#FFFFFF",
                  borderColor: "#0C0C0C",
                  height: "30px",
                  width: "120px",
                }}
              >
                Go to Pay
              </Button>
            </div>
          </form>
          <Link to="/" style={{ display: isMedium ? "block" : "none" }}>
            <Button
              variant=""
              style={{
                color: "#F26522",
                fontSize: "10px",
                backgroundColor: "#FFFFFF",
              }}
              startIcon={<ArrowBackIcon style={{ fontSize: "10px" }} />}
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import RegistrationMainForm from "./RegistrationMainForm";

const StyledBox = styled(Box)({
  maxWidth: "sm",
  margin: "auto",
  padding: "1.5rem",
  backgroundColor: "linear-gradient(to bottom right, #FFA500, #1E90FF)",
  color: "#FFFFFF",
  borderRadius: "1rem",
  boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)",
});

const RegistrationMemberForm = () => {
  return (
    <div>
        <RegistrationMainForm/>
        <StyledBox>
      <Typography variant="body2" className="text-sm uppercase tracking-wide">
        SwaSarjan
      </Typography>
      <Typography variant="h5" className="text-2xl font-semibold mt-2">
        Regular Membership
      </Typography>
      <Typography variant="h2" className="text-4xl font-bold mt-4">
        Rs. 1500 /-
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Typography variant="body2" className="text-sm">Expired Date</Typography>
        <Typography variant="body2" className="text-sm">05/14</Typography>
      </Box>
    </StyledBox>
    </div>
  );
};

export default RegistrationMemberForm;

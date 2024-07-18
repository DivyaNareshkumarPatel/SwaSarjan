import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
    const navigate = useNavigate();
  
    const handleContactClick = () => {
        navigate('/contact');
    };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Swa Sarjan Website Redevelopment Terms & Conditions
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Swa Sarjan Foundation website ("Swa Sarjan" or "Foundation"), operated under the domain www.swasarjan.org. This document outlines the terms and conditions governing your use of our services and your privacy rights. By accessing or using our services, you agree to abide by these terms.
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. Introduction
      </Typography>
      <Typography variant="body1" paragraph>
        This User Agreement and Privacy Policy ("Agreement") governs your use of the Swa Sarjan Foundation website and services. Your access and use of the Service constitute your acceptance of these terms. If you do not agree with any part of this Agreement, please refrain from using our website.
      </Typography>
      <Typography variant="h6" gutterBottom>
        2. Ownership and Operation
      </Typography>
      <Typography variant="body1" paragraph>
        The Swa Sarjan Foundation website is owned and operated by Swa Sarjan Foundation. Our registered office is located at [Insert Registered Office Address]. By accessing our website, you agree to comply with all applicable laws and regulations.
      </Typography>
      <Typography variant="h6" gutterBottom>
        3. Updates to the Agreement
      </Typography>
      <Typography variant="body1" paragraph>
        This Agreement may be modified from time to time. Any changes or revisions will be effective immediately upon posting on the website. Continued use of the Service after any modifications constitutes acceptance of the updated Agreement.
      </Typography>
      <Typography variant="h6" gutterBottom>
        4. Description of Services
      </Typography>
      <Typography variant="body1" paragraph>
        The Swa Sarjan Foundation website provides information about social good organizations (SGOs) and allows users to access and share information about these organizations. Users may create profiles for SGOs or gain access to exclusive content upon registration.
      </Typography>
      <Typography variant="h6" gutterBottom>
        5. Registration Information
      </Typography>
      <Typography variant="body1" paragraph>
        Users may be required to register for certain services and provide personal information such as name, contact details, and organization affiliation. By providing this information, you agree that it is accurate, complete, and up-to-date. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
      </Typography>
      <Typography variant="h6" gutterBottom>
        6. Use of Content
      </Typography>
      <Typography variant="body1" paragraph>
        All content available on the Swa Sarjan Foundation website, including user-generated content, is subject to copyright and other intellectual property rights. By posting content on the website, you grant Swa Sarjan Foundation a non-exclusive, royalty-free license to use, reproduce, and distribute the content for any purpose.
      </Typography>
      <Typography variant="h6" gutterBottom>
        7. Monitoring
      </Typography>
      <Typography variant="body1" paragraph>
        Swa Sarjan Foundation reserves the right to monitor user activity on the website to ensure compliance with this Agreement. However, we do not guarantee the accuracy or authenticity of user-generated content. Users are advised to exercise caution when interacting with content on the website.
      </Typography>
      <Typography variant="h6" gutterBottom>
        8. Fees and Payments
      </Typography>
      <Typography variant="body1" paragraph>
        Certain services offered by Swa Sarjan Foundation may require payment. By making a payment, you agree to abide by the terms and conditions of our payment processing partners. Fees paid are non-refundable unless otherwise stated.
      </Typography>
      <Typography variant="h6" gutterBottom>
        9. Termination or Suspension
      </Typography>
      <Typography variant="body1" paragraph>
        Swa Sarjan Foundation reserves the right to terminate or suspend access to the Service, with or without notice, for any violation of this Agreement. Users are solely responsible for maintaining the security of their accounts and must notify us immediately of any unauthorized access.
      </Typography>
      <Typography variant="h6" gutterBottom>
        10. Disputes and Jurisdiction
      </Typography>
      <Typography variant="body1" paragraph>
        Any disputes arising from this Agreement shall be governed by the laws of [Insert Jurisdiction]. Users agree to resolve any disputes with Swa Sarjan Foundation through good faith negotiations. Any legal action must be brought in the courts of [Insert Jurisdiction].
      </Typography>
      <Typography variant="h6" gutterBottom>
        11. Communications
      </Typography>
      <Typography variant="body1" paragraph>
        Communications between users and Swa Sarjan Foundation may occur electronically. By using our services, you consent to receive electronic communications from us. We may also send you important updates and notifications related to your account.
      </Typography>
      <Typography variant="h6" gutterBottom>
        12. Updates and Add-ons
      </Typography>
      <Typography variant="body1" paragraph>
        From time to time, Swa Sarjan Foundation may introduce new features or services, which will be subject to this Agreement. Users are encouraged to review the terms periodically for any updates or changes.
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for choosing the Swa Sarjan Foundation. If you have any questions or concerns about this Agreement, please <span onClick={handleContactClick} style={{ color: 'blue', cursor: 'pointer' }}>contact us</span>.
      </Typography>
    </Container>
  );
};

export default TermsAndConditions;

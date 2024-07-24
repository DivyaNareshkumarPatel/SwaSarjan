import React from 'react';
import { Container, Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
    const navigate = useNavigate();
  
    const handleContactClick = () => {
        navigate('/contact');
    };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Swa Sarjan Terms & Conditions
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Swa Sarjan Foundation website , operated under the domain www.swasarjan.org. This document outlines the terms and 
        conditions governing your use of our services and your privacy rights. By accessing or using our services, you agree to abide by these 
        terms.
      </Typography>
      <Typography variant="h6" gutterBottom>
      1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
      By using this website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as 
      our Privacy Policy. If you do not agree to these terms, please do not use our website.
      </Typography>
      <Typography variant="h6" gutterBottom>
      2. Use of the Website
      </Typography>
      <Typography variant="body1" paragraph>
      You agree to use the SwaSarjan Foundation website for lawful purposes only and in a way that does not infringe the rights of, 
      restrict, or inhibit anyone else’s use and enjoyment of the website. Prohibited behavior includes but is not limited to harassing 
      or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue 
      within our website.
      </Typography>
      <Typography variant="h6" gutterBottom>
      3. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
      All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of the 
      SwaSarjan Foundation or its content suppliers and is protected by international copyright laws. Unauthorized use of this content is 
      strictly prohibited.
      </Typography>
      <Typography variant="h6" gutterBottom>
      4. User Content
      </Typography>
      <Typography variant="body1" paragraph>
      Any material you send or post to this website shall be considered non-proprietary and non-confidential. The SwaSarjan Foundation 
      reserves the right to use, copy, distribute, and disclose to third parties any such material for any purpose. You are prohibited from 
      posting or transmitting to or from this website any material that is threatening, defamatory, obscene, offensive, pornographic, or 
      otherwise violates any law.
      </Typography>
      <Typography variant="h6" gutterBottom>
      5. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
      The SwaSarjan Foundation does not guarantee that the website will be secure or free from bugs or viruses. You are responsible for 
      configuring your information technology, computer programs, and platform to access our website. You should use your own virus protection 
      software. To the extent permitted by law, we exclude all conditions, warranties, representations, or other terms which may apply to our 
      website or any content on it, whether express or implied. We will not be liable to any user for any loss or damage, whether in contract, 
      tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:
      <list>
        <li>
        Use of, or inability to use, our website;
        </li>
        <li>
        Use of or reliance on any content displayed on our website.
        </li>
      </list>
      </Typography>
      <Typography variant="h6" gutterBottom>
      6. Changes to Terms
      </Typography>
      <Typography variant="body1" paragraph>
      The SwaSarjan Foundation reserves the right to revise these terms and conditions at any time by updating this page. Your continued 
      use of the website after changes are posted constitutes your acceptance of the new terms.
      </Typography>
      <Typography variant="h6" gutterBottom>
      7. Links to Third-Party Websites
      </Typography>
      <Typography variant="body1" paragraph>
      This website may contain links to third-party websites. These links are provided for your convenience to provide further information. 
      They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
      </Typography>
      <Typography variant="h6" gutterBottom>
        8. Fees and Payments
      </Typography>
      <Typography variant="body1" paragraph>
        Certain services offered by Swa Sarjan Foundation may require payment. By making a payment, you agree to abide by the terms and 
        conditions of our payment processing partners. Fees paid are non-refundable unless otherwise stated.
      </Typography>
      <Typography variant="h6" gutterBottom>
        9. Termination or Suspension
      </Typography>
      <Typography variant="body1" paragraph>
        Swa Sarjan Foundation reserves the right to terminate or suspend access to the Service, with or without notice, for any violation of 
        this Agreement. Users are solely responsible for maintaining the security of their accounts and must notify us immediately of any 
        unauthorized access.
      </Typography>
      <Typography variant="h6" gutterBottom>
        10. Disputes and Jurisdiction
      </Typography>
      <Typography variant="body1" paragraph>
        Any disputes arising from this Agreement shall be governed by the laws of India. Users agree to resolve any disputes with Swa Sarjan 
        Foundation through good faith negotiations. Any legal action must be brought in the courts of India.
      </Typography>
      <Typography variant="h6" gutterBottom>
        11. Communications
      </Typography>
      <Typography variant="body1" paragraph>
        Communications between users and Swa Sarjan Foundation may occur electronically. By using our services, you consent to receive 
        electronic communications from us. We may also send you important updates and notifications related to your account.
      </Typography>
      <Typography variant="h6" gutterBottom>
        12. Updates and Add-ons
      </Typography>
      <Typography variant="body1" paragraph>
        From time to time, Swa Sarjan Foundation may introduce new features or services, which will be subject to this Agreement. Users are 
        encouraged to review the terms periodically for any updates or changes.
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for choosing the Swa Sarjan Foundation. If you have any questions or concerns about this Agreement, please 
        <span onClick={handleContactClick} style={{ color: 'blue', cursor: 'pointer' }}>contact us</span>.
      </Typography>
    </Container>
  );
};

export default TermsAndConditions;

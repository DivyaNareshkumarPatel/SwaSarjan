import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
    const navigate = useNavigate();
  
    const handleContactClick = () => {
        navigate('/contact');
    };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom>
        Swa Sarjan Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
      The SwaSarjan Foundation (“we,” “us,” “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, 
      use, disclose, and safeguard your information when you visit our website, [swasarjan.org], and any other media form, media channel, 
      mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. 
      If you do not agree with the terms of this privacy policy, please do not access the site.
      </Typography>
      <Typography variant="h6" gutterBottom>
      1. Information We Collect
      </Typography>
      <Typography variant="body1" paragraph>
      <b>Personal Data</b> We may collect personally identifiable information, such as your name, email address, and phone number, that you 
      voluntarily 
      provide to us when you register on the Site, make a donation, subscribe to our newsletter, or contact us.
      </Typography>
      <Typography variant="body1" paragraph>
      <b>Derivative Data</b> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, 
      your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
      </Typography>
      <Typography variant="body1" paragraph>
      <b>Financial Data</b> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, 
      expiration 
      date) that we may collect when you make a donation or purchase, order, return, exchange, or request information about our services from 
      the Site. We store only very limited, if any, financial information that we collect.
      </Typography>
      <Typography variant="body1" paragraph>
      <b>Mobile Device Data</b> Device information, such as your mobile device ID, model, and manufacturer, and information about the location 
      of your device, if you access the Site from a mobile device.
      </Typography>

      <Typography variant="h6" gutterBottom>
      2. Use of the Website
      </Typography>
      <Typography variant="body1" paragraph>
      We use the information we collect in the following ways:
      </Typography>
      <Typography variant="body1" paragraph>
        <list>
            <li><b>To Provide Services:</b> To process donations, manage event registrations, provide requested information, and improve our 
            services.</li>
            <li><b>Communication:</b> To send you emails regarding your account or order, respond to your inquiries, and send you updates, 
            newsletters, and marketing communications.</li>
            <li><b>Analytics:</b> To analyze trends, usage, and activities in connection with our Site.</li>
            <li><b>Security:</b> To protect the Site and our users from fraudulent or malicious activity.</li>
            <li><b>Compliance:</b> To comply with legal obligations and to enforce our terms and policies.</li>
        </list>
      </Typography>
      <Typography variant="h6" gutterBottom>
      3. Disclosure of Your Information
      </Typography>
      <Typography variant="body1" paragraph>
      We may share information we have collected about you in certain situations:
      </Typography>
      <Typography variant="body1" paragraph>
        <list>
            <li><b>With Service Providers:</b> We may share your information with third parties that perform services for us or on our behalf, 
            such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            <li><b>Business Transfers:</b> If we undergo a merger, acquisition, or asset sale, your information may be transferred as part of 
            that transaction.</li>
            <li><b>Legal Requirements:</b> We may disclose your information if required to do so by law or in response to valid requests by 
            public authorities (e.g., a court or government agency).</li>
        </list>
      </Typography>
      <Typography variant="h6" gutterBottom>
      4. Security of Your Information
      </Typography>
      <Typography variant="body1" paragraph>
      We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable 
      steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or 
      impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
      </Typography>
      <Typography variant="h6" gutterBottom>
      5. Your Privacy Rights
      </Typography>
      <Typography variant="body1" paragraph>
      You may review, change, or terminate your account at any time. If you wish to exercise any of these rights, please contact us at the 
      contact information provided below. We will respond to your request within 30 days.
      </Typography>
      <Typography variant="h6" gutterBottom>
      6. Policy for Children
      </Typography>
      <Typography variant="body1" paragraph>
      We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal 
      information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
      </Typography>
      <Typography variant="h6" gutterBottom>
      7. Changes to This Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
      We may update this Privacy Policy from time to time. We will notify you of any changes by updating the “Last Updated” date of this 
      Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for choosing the Swa Sarjan Foundation. If you have any questions or concerns about this Agreement, please 
        <span onClick={handleContactClick} style={{ color: 'blue', cursor: 'pointer' }}>contact us</span>.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;

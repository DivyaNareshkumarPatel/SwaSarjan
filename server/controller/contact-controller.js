// server/controller/contact-controller.js
import sendEmail from '../services/emailService.js';
import Contact from '../models/contactModel.js'; // Assuming you have a model for storing contact form data

export const contactUs = async (req, res) => {
  const { firstName, lastName, email, phone, role, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !role || !message) {
    return res.status(400).json({ msg: 'Please fill in all fields.' });
  }

  // Save contact details to the database
  try {
    const newContact = new Contact({ firstName, lastName, email, phone, role, message });
    await newContact.save();
  } catch (error) {
    return res.status(500).json({ msg: 'Error saving contact details to the database.' });
  }

  // Send email
  const emailData = {
    to: 'recipient@example.com', // Replace with your email or dynamically set
    subject: 'New Contact Form Submission',
    text: `You have received a new message from ${firstName} ${lastName} (${email}, ${phone}): ${message}`,
  };

  try {
    await sendEmail(emailData);
    res.status(200).json({ msg: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error sending email.' });
  }
};

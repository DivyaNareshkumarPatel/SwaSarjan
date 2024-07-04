// server/routes/router.js
import express from 'express';
import { signupUser, loginUser } from '../controller/user-controller.js';
import { contactUs } from '../controller/contact-controller.js'; // Import the contact form handler

const router = express.Router();

// router.post('/registration', upload.single('photo'), signupUser);
router.post('/login', loginUser);
router.post('/contact', contactUs); // Add the new contact form route

export default router;

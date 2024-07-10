import express from 'express';
import { signupUser, loginUser } from '../controller/user-controller.js';
import { contactUs } from '../controller/contact-controller.js';
import { donateUs } from '../controller/donate-controller.js';
import { createEvent } from '../controller/adminEvent-controller.js';

const router = express.Router();

// User related routes
router.post('/registration', signupUser);
router.post('/login', loginUser);
router.post('/contact', contactUs);
// router.post('/donate', donateUs);

// Event creation route
router.post('/admin29/events', createEvent);

// Route to get all events
router.get('/admin29/events', async (req, res) => {
  try {
    const events = await Event.find(); // Assuming Event is your Mongoose model
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;

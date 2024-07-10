import express from 'express';
import { signupUser, loginUser } from '../controller/user-controller.js';
import { contactUs } from '../controller/contact-controller.js'; // Import the contact form handler
// import { upload } from '../middleware/multer.middleware.js';
import { donateUs } from '../controller/donate-controller.js';
import { setEvents } from '../controller/setEvents-controller.js';
import { getEvents } from '../controller/getEvents-controller.js';
import cloudinary from "cloudinary"
import {upload} from "../middleware/multer.js"

const router = express.Router();

router.post('/registration', 
    upload.fields([
        { name: 'photo', maxCount: 1 },
        { name: 'signature', maxCount: 1 }
    ]), 
    signupUser
);

router.post('/login', loginUser);
router.post('/contact', contactUs);
router.post('/donate', donateUs);

router.post('/events', upload.single('photo'), async (req, res) => {
    const { title, description, date, venue } = req.body;
    const photo = req.file;
  
    try {
      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(photo.path);
      const event = new Event({
        title,
        description,
        date,
        venue,
        photo: result.secure_url,
      });
      await event.save();
      res.status(201).send(event);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // Route to get all events
  router.get('/events', async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).send(events);
    } catch (error) {
      res.status(500).send(error);
    }
  });
export default router;

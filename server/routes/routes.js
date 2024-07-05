import express from 'express';
import { signupUser, loginUser } from '../controller/user-controller.js';
import { contactUs } from '../controller/contact-controller.js'; 
import { upload } from '../middleware/multer.middleware.js';

const router = express.Router();

router.post('/registration', 
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'signature', maxCount: 1 }
  ]), 
  (req, res, next) => {
    // console.log("Files received in the route:", req.files);
    next();
  },
  signupUser
);

router.post('/login', loginUser);
router.post('/contact', contactUs);

export default router;

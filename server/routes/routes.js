import express from 'express';
import { signupUser, loginUser} from '../controller/user-controller.js';
import { contactUs } from '../controller/contact-controller.js'; // Import the contact form handler
import { upload } from '../middleware/multer.middleware.js';

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
// router.post('/donate', donateUs);

export default router;

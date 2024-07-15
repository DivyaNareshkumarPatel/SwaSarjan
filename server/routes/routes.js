import express from 'express';
import { upload } from '../middleware/multer.js';
import { signupUser, loginUser } from '../controller/user-controller.js';
import { contactUs } from '../controller/contact-controller.js';
import { donateUs } from '../controller/donate-controller.js';
import { createEvent } from '../controller/adminEvent-controller.js';
import { getAllEvents } from '../controller/adminEvent-controller.js';
import { loginAdmin } from "../controller/adminLogin-controller.js"
import { deleteEvent } from '../controller/adminEvent-controller.js';
import { News } from '../controller/newsLetter-controller.js';
import { getAllNews } from '../controller/adminNews-controller.js';
import { createNews } from '../controller/adminNews-controller.js';
import { deleteNews } from '../controller/adminNews-controller.js';
import { tempApplicant } from '../controller/temp.applicant-controller.js';
import { getAllUsers } from '../controller/user-controller.js';
import { createBlog } from '../controller/adminBlog-controller.js';
import { getAllBlogs } from '../controller/adminBlog-controller.js';

const router = express.Router();
// User related routes
router.post('/registration', upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'signature', maxCount: 1 }
]), signupUser);
router.post('/login', loginUser);
router.post('/contact', contactUs);
router.post('/about', tempApplicant);
router.post('/donate', donateUs);

router.post('/admin29/events', upload.single('image'), createEvent);
router.post('/admin29/blogs', upload.single('image'), createBlog);
router.get('/admin29/events', getAllEvents);
router.get('/admin29/blogs', getAllBlogs);
router.get('/admin29/news', getAllNews);
router.get('/admin29/users', getAllUsers);
router.delete('/admin29/events/:id', deleteEvent);
router.post('/admin29/news', upload.single('image'), createNews);
router.delete('/admin29/news/:id', deleteNews);

router.post('/admin29/login', loginAdmin);

// router.post('/upload', (req, res) => {
router.post('/', News)

router.post('/upload',(req,res)=>{
    console.log(req.file)
})


export default router;

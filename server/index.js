import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';

import connection from './database/db.js';
import router from './routes/routes.js';
import bodyParser from 'body-parser';

const upload = multer({ dest: 'uploads/' });

dotenv.config()
const app = express()
app.use(cors());
app.use(bodyParser.json({ extended:true}))
app.use(bodyParser.urlencoded({ extended:true}))
app.use('/',router);
// app.use(express.static("public"))
app
const PORT = 8000

app.listen(PORT , ()=>{console.log(`Server is running successfully on PORT ${PORT}`)})

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

connection(USERNAME,PASSWORD);
import { fileURLToPath } from 'url';
import path from 'path';
import multer from 'multer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(path.join(__dirname, '../public/uploads/'))
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function (req, file, cb) {
        // Customize filename as needed; here, using original filename with a timestamp
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Configure multer to handle multiple files
export const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Example limit: 5MB per file
}).fields([
    { name: 'photo', maxCount: 1 },
    { name: 'signature', maxCount: 1 }
]);

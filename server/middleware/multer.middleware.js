import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("Uploading file to destination");
        cb(null, '../uploads/');
    },
    filename: function (req, file, cb) {
        console.log("Setting file name", file.originalname);
        cb(null, Date.now() + '-' + file.originalname);
    }
});

export const upload = multer({ storage });

import multer from "multer"

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        return ( null , "../uploads")
    },
    filename: function(req,file,cb){
        retrun ( null , `${Date.now()}-${file.originalname}`)
    },
})

export const upload = multer({ storage })
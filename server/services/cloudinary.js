import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import dotenv from "dotenv";
import { response } from 'express';

dotenv.config();
// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if (!localFilePath) return null
        cloudinary.uploader.upload(localFilePath , {
            resource_type: "auto"
        })
        console.log('file uploaded successfully!',
            response.url
        );
        return response
    }catch(error){
        fs.unlinkSync(localFilePath)
    }
}

export {uploadOnCloudinary}
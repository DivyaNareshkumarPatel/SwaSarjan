import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        console.log('File uploaded successfully!', result.url);
        
        // Return the secure URL of the uploaded file
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading file to Cloudinary:', error);
        fs.unlinkSync(localFilePath); // Delete the local file on error
        throw error; // Re-throw the error to handle it in the calling function
    }
}

export { uploadOnCloudinary };

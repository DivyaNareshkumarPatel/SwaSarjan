import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from "../models/user.js";
import Token from "../models/token.js";
import { uploadOnCloudinary } from '../services/cloudinary.js';


dotenv.config();

export const signupUser = async (request, response) => {
    try {
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        const photoLocalPath = request.file?.photo[0]?.path
        const signatureLocalPath = request.file?.signature[0]?.path
        
        const photo = await uploadOnCloudinary(photoLocalPath)
        const signature = await uploadOnCloudinary(signatureLocalPath)
        
        console.log(photo)
        console.log(signature)

        const user = {
            name: request.body.name,
            userName: request.body.userName,
            email: request.body.email,
            password: hashedPassword,
            phone: request.body.phone,
            otp: request.body.otp,
            dob: request.body.dob,
            addr: request.body.addr,
            state: request.body.state,
            city: request.body.city,
            pinCode: request.body.pinCode,
            panCard: request.body.panCard,
            adharCard: request.body.adharCard,
            gender: request.body.gender,
            photo: photo,
            signature: signature
        };

        const newUser = new User(user);

        await newUser.save();
       
        return response.status(200).json({ msg: 'Signup successful' });
        
    } catch (error) {

        console.error('Error during user signup:', error);
        
        return response.status(500).json({ msg: 'Error while signing up the user' });
    
    }
}

export const loginUser = async (request, response) => {
    try {
        let user = await User.findOne({ userName: request.body.userName });
        if (!user) {
            console.error('Username does not match');
            return response.status(400).json({ msg: 'Username does not match' });
        }

        // Log the stored hashed password for debugging
        // console.log(`Stored hashed password: ${user.password}`);

        let match = await bcrypt.compare(request.body.password, user.password);

        // Log the result of the password comparison
        // console.log(`Password match result: ${match}`);
        // console.log(`ACCESS_SECRET_KEY: ${process.env.ACCESS_SECRET_KEY}`);
        // console.log(`REFRESH_SECRET_KEY: ${process.env.REFRESH_SECRET_KEY}`);


        if (match) {
            // Ensure the secret keys are available
            if (!process.env.ACCESS_SECRET_KEY || !process.env.REFRESH_SECRET_KEY) {
                throw new Error('Secret keys are not set');
            }

            const accessToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY, { expiresIn: '15m' });
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({ token: refreshToken });
            await newToken.save();
            // console.log(user.name)
            return response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, name: user.name, userName: user.userName });
        } else {
            console.error('Password does not match');
            return response.status(400).json({ msg: 'Password does not match' });
        }
    } catch (error) {
        console.error('Error during user login:', error);
        return response.status(500).json({ msg: 'Error while user logging in' });
    }
}

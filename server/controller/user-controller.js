import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from "../models/user.js";
import Token from "../models/token.js";


dotenv.config();

export const signupUser = async (request , response) => {
    try{
        const hashedPassword = await bcrypt.hash(request.body.password, 10)

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
            gender: request.body.gender
        };
        
        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json({ msg : `signup successfully`})
    } catch(error){
        console.error('Error during user signup:', error);
        return response.status(500).json({ msg : `Error while signup the user`})

    }
}


export const loginUser =  async (request , response) => {
    let user = await User.findOne({ userName: request.body.userName });
    if(!user){
        return response.status(400).json({msg:'Username does not match'})
    }
    try{
        let match = bcrypt.compare(request.body.userName, user.userName)
        if(match){
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRETE_KEY , { expiresIn: '15m' })
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRETE_KEY)

            const newToken = new Token({ token: refreshToken })
            await newToken.save();

            return response.status(200).json({ accessToken: accessToken , refreshToken: refreshToken , name: user.name ,  userName: user.userName , });

        }else{
            return response.status(400).json({msg:'password does not match'})
        }
    } catch(error){
        return response.staus(500).json({ msg: 'Error while user logging in'})
    }
}
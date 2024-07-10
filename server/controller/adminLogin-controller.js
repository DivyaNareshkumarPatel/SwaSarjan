import Admin from "../models/admin.js";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import Token from '../models/token.js';

dotenv.config();

export const loginAdmin = async (request, response) => {
    try {
    console.log(request.body.admin); 
    console.log(request.body.password); 
    
    const admin = await Admin.findOne({ admin: request.body.admin });

    console.log(admin); 

    if (!admin) {
      console.error('Admin does not exist');
      return response.status(400).json({ msg: 'Admin does not exist' });
    }

    const match = request.body.password === admin.password; 
    if (match) {
      if (!process.env.ACCESS_SECRET_KEY || !process.env.REFRESH_SECRET_KEY) {
        throw new Error('Secret keys are not set');
      }

      const accessToken = jwt.sign(admin.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
      const refreshToken = jwt.sign(admin.toJSON(), process.env.REFRESH_SECRET_KEY);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return response.status(200).json({ accessToken, refreshToken });
    } else {
      console.error('Password does not match');
      return response.status(400).json({ msg: 'Password does not match' });
    }
  } catch (error) {
    console.error('Error during admin login:', error);
    return response.status(500).json({ msg: 'Error while admin logging in' });
  }
};

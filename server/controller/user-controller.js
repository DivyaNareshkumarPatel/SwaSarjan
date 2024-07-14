import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/user.js';
import Token from '../models/token.js';
// import { uploadOnCloudinary } from '../services/cloudinary.js';

dotenv.config();

//////////////////////////////////////////  SIGNUP  ///////////////////////////////////////////////////////////

export const signupUser = async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    console.log(request.body)
    console.log(request.files['photo'][0].path)
    console.log(request.files['signature'][0].path)
    const newUser = new User({
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
      photo: request.files['photo'][0].path,
      signature: request.files['signature'][0].path
    });

    await newUser.save();

    return response.status(201).json({ msg: 'Signup successful' });
  } catch (error) {
    console.error('Error during user signup:', error);
    return response.status(500).json({ msg: 'Error while signing up the user', error: error.message });
  }
};

//////////////////////////////////////////  LOGIN  ///////////////////////////////////////////////////////////

export const loginUser = async (request, response) => {
  try {
    const user = await User.findOne({ userName: request.body.userName });
    if (!user) {
      console.error('Username does not exist');
      return response.status(400).json({ msg: 'Username does not exist' });
    }

    const match = await bcrypt.compare(request.body.password, user.password);
    if (match) {
      if (!process.env.ACCESS_SECRET_KEY || !process.env.REFRESH_SECRET_KEY) {
        throw new Error('Secret keys are not set');
      }

      const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
      const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return response.status(200).json({ accessToken, refreshToken, name: user.name, userName: user.userName });
    } else {
      console.error('Password does not match');
      return response.status(400).json({ msg: 'Password does not match' });
    }
  } catch (error) {
    console.error('Error during user login:', error);
    return response.status(500).json({ msg: 'Error while user logging in' });
  }
};


//////////////////////////////////////////  FETCHDATA  ///////////////////////////////////////////////////////////

export const getAllUsers = async (req , res) => {
  try {
      const users = await User.find();
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({ message: 'Error while fetching users', error });
  }   
}
// server/controller/user-controller.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from "../models/user.js";
import Token from "../models/token.js";
import { uploadOnCloudinary } from '../services/cloudinary.js';
import fs from 'fs';

dotenv.config();

export const signupUser = async (request, response) => {
  try {

    // working
    // console.log(request.body)
    // not working
    // console.log(request.files)

    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    const photoLocalPath = request.files?.photo[0]?.path;
    const signatureLocalPath = request.files?.signature[0]?.path;
    const photo = await uploadOnCloudinary(photoLocalPath);
    const signature = await uploadOnCloudinary(signatureLocalPath);

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
      photo: photo.url, // Assuming you need the URL here
      signature: signature.url // Assuming you need the URL here
    };

    const newUser = new User(user);

    await newUser.save();

    return response.status(200).json({ msg: 'Signup successful' });

  } catch (error) {
    console.error('Error during user signup:', error);

    return response.status(500).json({ msg: 'Error while signing up the user' });
  }
};

export const loginUser = async (request, response) => {
  try {
    let user = await User.findOne({ userName: request.body.userName });
    if (!user) {
      console.error('Username does not match');
      return response.status(400).json({ msg: 'Username does not match' });
    }

    let match = await bcrypt.compare(request.body.password, user.password);
    if (match) {
      if (!process.env.ACCESS_SECRET_KEY || !process.env.REFRESH_SECRET_KEY) {
        throw new Error('Secret keys are not set');
      }

      const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
      const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      return response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, name: user.name, userName: user.userName });
    } else {
      console.error('Password does not match');
      return response.status(400).json({ msg: 'Password does not match' });
    }
  } catch (error) {
    console.error('Error during user login:', error);
    return response.status(500).json({ msg: 'Error while user logging in' });
  }
};

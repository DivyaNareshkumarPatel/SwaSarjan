import User from "../models/user.js";
import bcrypt from 'bcrypt';


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
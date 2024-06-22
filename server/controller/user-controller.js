import User from "../models/user.js";



export const signupUser = async (request , response) => {
    try{
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json({ msg : `signup successfully`})
    } catch(error){
        console.error('Error during user signup:', error);
        return response.status(500).json({ msg : `Error while signup the user`})

    }
}
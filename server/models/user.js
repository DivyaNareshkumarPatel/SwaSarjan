import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    dob: {
        type: Date, // Changed to Date type
        required: true
    },
    addr: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    panCard: {
        type: String,
        required: true
    },
    adharCard: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    photo: {
        
    },
    signature: {

    }
});

// Create the user model
const User = mongoose.model('User', userSchema);

export default User;

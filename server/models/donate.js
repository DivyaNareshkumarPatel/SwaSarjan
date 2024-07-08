import mongoose from "mongoose";

const donateSchema = mongoose.Schema({
    donationType: {
    type: String,
    required: true
    },
    amount: {
        type: String,
        required: true
    },
    customAmount: {
        type: String
    },
    frequency: {
        type: String,
        required: true
    }
})

const donation = mongoose.model('donations' , donateSchema)

export default donation;
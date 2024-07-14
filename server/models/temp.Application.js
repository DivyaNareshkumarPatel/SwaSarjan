import mongoose from "mongoose";

const tempApplicationSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required : true
    },
    city:{
        type: String,
        required : true
    },
    phone:{
        type: String,
        required : true,
        unique: true
    },
    email:{
        type: String,
        required : true
    },
})

const TempAplicant = mongoose.model('TempApplicant', tempApplicationSchema)

export default TempAplicant;
import mongoose from "mongoose";

const newsLetterSchema = mongoose.Schema({
    email: {
        type:String,
        require:true,
        unique: true
    }
})

const NewsLetter = mongoose.model('Newsletter', newsLetterSchema);

export default NewsLetter;
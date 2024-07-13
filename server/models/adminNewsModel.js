import mongoose, { Mongoose } from "mongoose";

const newsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

const News = mongoose.model('News',newsSchema)

export default News;
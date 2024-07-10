import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
})

const Event = mongoose.model('event' , eventSchema)

export default Event;
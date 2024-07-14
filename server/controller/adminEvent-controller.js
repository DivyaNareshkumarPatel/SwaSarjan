import { AdminEvent } from "../models/adminEventModel.js";

// Create a new event
export const createEvent = async (req, res) => {
    const { title, description, date, venue, smallDesc, eventType} = req.body;
    try {
        const image = req.file ? req.file.path : null;
        console.log(req.file)
        console.log(image)
        const newEvent = new AdminEvent({
            title,
            description,
            date,
            venue,
            smallDesc,
            eventType,
            image
        });

        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error while creating event', error });
    }
};


export const getAllEvents = async (req, res) => {
    try {
        const events = await AdminEvent.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error while fetching events', error });
    }
};

export const deleteEvent = async (req, res) => {
    console.log(req)
    const articleID = req.params.id; 
    console.log(`articleID :- ${articleID}`)
    // console.log(req.params.id)
    try {
        const deletedEvent = await AdminEvent.findByIdAndDelete({_id: articleID});
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });    
        }
        return res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error while deleting event', error });
    }
};
import { AdminEvent } from "../models/adminEventModel.js";

// Create a new event
export const createEvent = async (req, res) => {
    const { title, description, date, venue, smallDesc, eventType, image } = req.body;
    try {
        console.log(AdminEvent)
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
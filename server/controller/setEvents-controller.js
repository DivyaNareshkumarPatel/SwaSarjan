import Event from "../models/events.js";
// import mongoose from "mongoose";

export const setEvents = async (req, res) => {
  const { title, description, date, venue, photo } = req.body;
  const event = new Event({ title, description, date, venue, photo });
  try {
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send(error);
  }
};

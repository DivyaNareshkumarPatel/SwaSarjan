import News from "../models/adminNewsModel.js";
import fs from "fs"
import mongoose from "mongoose";

export const createNews = async (req , res) => {
    try{
        if (req === null || req === '')
            res.status(500).json({ message: 'Error while getting News from frontend', error });

    const image = req.file ? req.file.path : null;
        console.log(image)
        const newNews = new News({
            image
        });
        const savedNews = await newNews.save();
        res.status(201).json(savedNews);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error while creating News', error });
    }
} 




export const getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        return res.status(200).json(news);
    } catch (error) {
        return res.status(500).json({ message: 'Error while fetching news', error });
    }
};



export const deleteNews = async (req, res) => {
    const { id } = req.params.id; 
    try {
        const newsItem = await News.findById(id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.log('Invalid ID format')
            return res.status(400).json({ message: 'Invalid ID format' });
          }
        if (!newsItem) {
            return res.status(404).json({ message: 'News not found' });
        }

        const imagePath = newsItem.image;
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await News.findByIdAndDelete(id);
        return res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
        console.error('Error while deleting news:', error);
        return res.status(500).json({ message: 'Error while deleting News', error });
    }
};
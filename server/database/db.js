import mongoose from "mongoose";

// Function to connect to the main database
const connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@swa-sarjan.en06xhf.mongodb.net/?retryWrites=true&w=majority&appName=swa-sarjan`;
    try {
        await mongoose.connect(URL);
        console.log('Main database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the main database', error);
    }
};

export default connection;

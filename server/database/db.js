
import mongoose from "mongoose"


const connection = async (USERNAME,PASSWORD)=>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@swa-sarjan.en06xhf.mongodb.net/?retryWrites=true&w=majority&appName=swa-sarjan`;
    try{
        await mongoose.connect(URL)
        console.log('Database connected successfully')
    }catch (error){
        console.log('Error while connecting with database',error)
    }
}

export default connection;
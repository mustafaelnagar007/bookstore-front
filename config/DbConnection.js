import mongoose from "mongoose";
import 'dotenv/config'

 export const connection = async ()=>{
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to data-base")
} catch (error) {
    console.log("connection failed to data-base", error)
}
}


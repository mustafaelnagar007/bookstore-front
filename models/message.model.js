import mongoose from "mongoose";
 const messageScima= new mongoose.Schema({
    message:{
    type:String,
    minlength:[3," too short message"]
    },
   
     rescivedId:{
      type:mongoose.SchemaTypes.ObjectId
   }
 })
 export const messageModel=mongoose.model("message",messageScima)
import { messageModel } from "../../../models/message.model.js"
import jwt from "jsonwebtoken"
const addMessage = async(req,res)=>{
    const token=req.header("token")
    const {message}=req.body
    jwt.verify(token,"myToken",async(error,decoded)=>{
        if(error){
          return res.status(400).json({message:"invalid token"})
        }else{
         await messageModel.insertMany({message,rescivedId:decoded.id})
         res.status(200).json({message:"success"})
        }
    })
    
 
}
const getMessageId =async(req,res)=>{
  
    const messages= await messageModel.find({rescivedId:req.user})
    res.json({message:"success",messages})
}
export{
    addMessage,
    getMessageId
}
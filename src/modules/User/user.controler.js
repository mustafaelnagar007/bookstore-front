import { userModel } from './../../../models/user.model.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { send } from '../../validation/nodeMailer.js';
const signUp =async(req,res)=>{
    const {name,email,passward,age}=req.body;
    let user = await userModel.findOne({email})
    if(user){
         res.status(400).json({message:"user alredy exist"})
    }
      else{
        send({email})
        const hash=bcrypt.hashSync(passward,8)
        await userModel.insertMany({name,email,passward:hash,age})
      res.status(200).json({message:"success"})
    }
}

const signIn=async(req,res)=>{
const {email,passward}=req.body
const user =await userModel.findOne({email})
if(user){
let match=bcrypt.compareSync(passward,user.passward);
if(match){

    const token =jwt.sign({Id:user.id,name:user.name, email:user.email},"myToken")
    res.status(200).json({message:"success",token})
    }
    else{
        res.json({message:"email or passward uncorrect"})
}
}else{
    res.status(400).json({Message:"user dosn't exist"})
}
}
// const varefaiy =async(req,res)=>{
//   const {email}= req.params
//       await userModel.findOneAndUpdate({email},{varified:true})
//     res.status(200).json({message:"your email verfaied successfully" ,email})
// }

export{
    signUp,
    signIn,
   
}
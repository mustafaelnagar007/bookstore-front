import mongoose, { Types } from "mongoose";
 const userschima= new mongoose.Schema({
    name:{
    type:String,
    require:true,
    minlength:[3," too short name"],
    maxlength:[25," too big name"]
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    passward:{
        type:String,
        require:true,
        minlength:[3," too short passward"],
        maxlength:[100," too big passward"]
    },
    age:{
        type:Number,
        require:true,
        min:[3," too young"],
        max:[50," too old"]
    },
     varified:{
 type:Boolean,
default:false
   }
 })
 export const userModel=mongoose.model("user",userschima)
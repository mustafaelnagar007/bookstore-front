import express from "express";
import 'dotenv/config';
import { connection } from "./config/DbConnection.js";
import { userRouter } from "./src/modules/User/user.routes.js";
import { messageRouter } from "./src/modules/Message/message.routes.js";
import { userModel } from "./models/user.model.js";
// init app
const app= express();
// middelwares
app.use(express.json());
connection()

app.use(userRouter)
app.use(messageRouter)
const PORT=process.env.PORT || 8000;
app.use("/verifaiy/:email",async(req,res)=>{
   const {email}= req.params
  await userModel.findOneAndUpdate({email},{varified:true})
res.status(200).json({message:"your email verfaied successfully" ,email})
})
app.listen(PORT,()=>{
    console.log(`Your app is running on port ${PORT} IN ${process.env.NODE_ENV}`)
})
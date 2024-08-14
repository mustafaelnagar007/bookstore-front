import express from"express"
import { addMessage,  getMessageId} from "./message.controler.js"
import { auth } from "../../MiddelWares/auth.js"

let messageRouter=express.Router()
messageRouter.post("/add",addMessage)
messageRouter.get("/getId",auth,getMessageId)
export{
    messageRouter
}
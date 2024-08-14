import express from "express"
import { signUp ,signIn} from "./user.controler.js"

let userRouter =express.Router()
userRouter.post("/signUp",signUp)
userRouter.post("/signIn",signIn)
// userRouter.post("/verifaiy/:email",varefaiy)
export{
    userRouter
}

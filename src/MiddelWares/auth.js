import jwt from "jsonwebtoken"
export const auth =(req,res,next)=>{
    const token=req.header("token")
jwt.verify(token,"myToken",async(error,decoded)=>{
if(error){
 res.json({message:"invalid token",error})
}else{
   req.user =decoded.id 
  next()
     
}
})
}

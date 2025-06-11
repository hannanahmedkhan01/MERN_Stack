const jwt=require('jsonwebtoken')
const asynchandler=require('express-async-handler')
const user=require('../models/userModels')

const protect= asynchandler(async(req,res,next)=>{
let token    

if(req.headers.authorization&& req.headers.authorization.startsWith('Bearer')){
    try{

        //Get token from the header
  token=req.headers.authorization.split(" ")[1]

  // Verify token
  const decoded = jwt.verify(token,process.env.JWT_SECRET)  


  //Get user from the token
req.user= await User.findById(decoded.id).select('-password')
  
next()
}
    catch(error){
        console.log(error)
        res.status(401)
        throw new Error("Not authorized")
    }
}
if(!token){
    res.status(401)
    throw new Error('No Token, not Authorized')
}

})


module.exports={protect}
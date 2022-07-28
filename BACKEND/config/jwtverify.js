const jwt=require('jsonwebtoken');
const asyncHandler=require('express-async-handler');

module.exports={
    VerifyAdmin:asyncHandler((req,res,next)=>{
        const token=req.headers['token'];
       
        jwt.verify(token,process.env.JWT_TOKEN,(err,user)=>{
            if(err){
               throw new Error('session Expired')
            }else{
                next();
            }
        });
       
    })
}
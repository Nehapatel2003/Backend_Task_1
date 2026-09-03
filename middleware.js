import jwt from 'jsonwebtoken';

let  roleMiddleware = (req,res,next)=>{
    if(req.user.role === "Admin")
        next()
    else{
        return res.status(401).json({success:false,message:"Only Admin can access the data .",data:res})
    }
}



// let authenticateToken = (req,res,next) =>{
//     let authHeader = req.headers.auth;
//     if(!authHeader){
//         return res.status(401).json({message :"Header Missing !",data:res})
//     }
//     let [scheme,token] = authHeader.split(" ")
//     if(scheme !=="Bearer" || !token){
//         return res.status(401).json({message :"Invalid token/scheme",data:res})  
//     }
//     try{
//         let decode =jwt.verify(token,process.env.JWT_KEY,)
//         req.user = decode
//         next()
//     }catch{
//         return res.status(401).json({message: "Token Expired", data:res})
//     }
// }

let cookieToken = (req,res,next) =>{
    let token = req.cookies.token
    if(!token){
        return res.status(401).json({message :"Invalid token/scheme"})
    }
    try{
        let decode = jwt.verify(token,process.env.JWT_KEY)
        req.user = decode
        next()
    }catch{
        return res.status(401).json({message :"Token Expired" , data:res})
    }
}

const errHandlingMiddleware = (err,req,res,next)=>{
    if(err) {
        return res.status(500).send({success:false,message:err.message,data:null})
    }  
}
export {cookieToken , roleMiddleware ,errHandlingMiddleware}
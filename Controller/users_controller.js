import {createUserModel, loginUserModel,listUserModel,getUserModel,updataUserModel,deleteUserModel} from '../Models/users_model.js'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"


const createUser= (req,res,next) =>{
    createUserModel(req.body ,(err,result) => {             
        if(err) return next(err)
        return res.status(200).json({success:true ,message:"User Register Successfully !", data: result})
    })  
}


const loginUser = (req,res,next) =>{ 
    loginUserModel(req.body,  async (err,result) =>{
        if(err || result.length === 0) return next(err)
        let user = result[0];
        let check = await bcrypt.compare(req.body.password,user.password)
        if(!check){
            return res.status(401).json({success:false , message:"Wrong id / Password" , data:err}) 
        }
        const token = jwt.sign({id:user.id , name:user.name , email:user.email , role:user.role},process.env.JWT_KEY,{expiresIn:"1h"})
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:10*1000
        })
        return res.status(200).json({success:true ,message:"User Login Successfully !", data: token})
              
    })
    }

   
const listUsers = (req,res,next) =>{
    listUserModel ((err,result) =>{
        if(err) next(err) 
        return res.status(200).json({success:true,message:"list all users",data:result})
    })
}

const getUser = (req,res,next) =>{
    // console.log(req.params.id) 
    getUserModel(req.params.id,(err,result) => {             
        if(err) return next(err)
        return res.status(200).json({success:true ,message:"User Found !", data: result})
    })
}

const updateUser = (req,res,next) =>{
    let user ={
        id:req.params.id,
        name:req.body.name,
        email:req.body.email
    }
    updataUserModel(user,(err,result) => {
        if(err) return next(err)
        return res.status(200).json({success:true , message:" User Updated successfully !",data :result})
    })
}

const deleteUser = (req,res,next) =>{
    deleteUserModel(req.params.id,(err,result) =>{
        if(err) return next(err)
        return res.status(200).json({success:true , message:" User deleted successfully !",data :result})  
    })
}

export {createUser,loginUser,listUsers,getUser,updateUser,deleteUser};
import express from "express" ;
const userRouter = express.Router();
import {createUser ,loginUser,listUsers,getUser,updateUser,deleteUser} from '../Controller/users_controller.js'
import { roleMiddleware,cookieToken} from "../middleware.js";

userRouter.post("/api/users/register" ,createUser)
userRouter.post("/api/users/login" ,loginUser)
userRouter.get("/api/users",cookieToken, roleMiddleware,listUsers)
userRouter.get("/api/user/:id" ,getUser)
userRouter.put("/api/users/:id",updateUser)
userRouter.delete("/api/users/:id",deleteUser)

export {userRouter};
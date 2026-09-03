import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";

import {userRouter} from './Routes/users_route.js'
import {productRouter} from "./Routes/products_route.js";
import {orderRouter} from "./Routes/orders_route.js";
import  mailRouter  from "./Routes/mailTest_Route.js";
import { errHandlingMiddleware } from "./middleware.js";
import {sendMail}  from "./Controller/email_Controller.js";

const app =  express();
app.use(express.json());
app.use(cookieParser());

app.use("/" ,userRouter)

app.use("/" ,productRouter)

app.use("/",orderRouter)

app.use("/",mailRouter)

app.use(errHandlingMiddleware)

app.listen(process.env.PORT ,() => {
    console.log("Server is running on port ",process.env.PORT)
})  
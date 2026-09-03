import express from "express" ;
const orderRouter = express.Router();
import {createOrder,listOrders,getOrder,updateOrder,deleteOrder} from '../Controller/orders_controller.js';
import { cookieToken } from "../middleware.js";

orderRouter.post("/api/orders" ,createOrder)
orderRouter.get("/api/orders",cookieToken ,listOrders)
orderRouter.get("/api/orders/:id" ,getOrder)
orderRouter.put("/api/orders/status/:id",updateOrder)
orderRouter.delete("/api/orders/:id",deleteOrder)

export {orderRouter}
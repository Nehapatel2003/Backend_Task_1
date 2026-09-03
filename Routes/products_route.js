import express from "express" ;
const productRouter = express.Router();
import {createProduct,listProducts,getProduct,updateProduct,deleteProduct} from '../Controller/products_controller.js';

productRouter.post("/api/products" ,createProduct)
productRouter.get("/api/products",listProducts)
productRouter.get("/api/products/:id" ,getProduct)
productRouter.put("/api/products/:id",updateProduct)
productRouter.delete("/api/products/:id",deleteProduct)

export {productRouter}
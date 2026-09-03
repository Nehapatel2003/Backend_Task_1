import {createProductModel,listProductModel,getProductModel,updateProductModel,deleteProductModel} from "../Models/products_model.js"


const createProduct= (req,res) =>{
    createProductModel(req.body ,(err,result) => {
        if(err) return next(err)
        return res.status(200).json({success:true ,message:"Product Add Successfully !", data: result})
    })
}
   
const listProducts = (req,res) =>{
    listProductModel ((err,result) =>{
        if(err) return next(err)
        return res.status(200).json({success:true , message:"list all Products" , data:result})
        
    })
}

const getProduct = (req,res) =>{ 
    getProductModel(req.params.id,(err,result) => {             
       if(err) return next(err)
       return res.status(200).json({success:true ,message:"Product Details  Found !", data: result})
        
    })
}

const updateProduct = (req,res) =>{
    let product ={
        id:req.params.id,
        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock
    }
    updateProductModel(product,(err,result)=>{
        if(err) return next(err)
        return res.status(200).json({success:true , message:" Product Updated successfully !",data :result})
    })
}

const deleteProduct = (req,res) =>{
    deleteProductModel(req.params.id,(err,result) =>{
        if(err) return next(err)
        return res.status(200).json({success:true , message:" Product deleted successfully !",data :result})  
    })
}

export {createProduct,listProducts,getProduct,updateProduct,deleteProduct};
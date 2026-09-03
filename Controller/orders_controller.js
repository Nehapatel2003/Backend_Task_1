import {createOrderModel,listOrderModel,getOrderModel,updateOrderModel,deleteOrderModel} from "../Models/orders_model.js"


const createOrder= (req,res) =>{
    createOrderModel(req.body ,(err,result) => {             
       if(err) return next(err)
       return res.status(200).json({success:true ,message:"Order Add Successfully !", data: result})
    })
}
   
const listOrders = (req,res) =>{
    listOrderModel ((err,result) =>{
        if(err) return next(err)
        return res.status(200).json({success:true , message:"list all orders" , data:result})
    })
}

const getOrder = (req,res) =>{ 
    getOrderModel(req.params.id,(err,result) => {             
        if(err) return next(err)
        return res.status(200).json({success:true ,message:"Order Details  Found !", data: result})
    })
}

const updateOrder = (req,res) =>{
    let order =[req.body.status,req.params.id]
    updateOrderModel(order,(err,result)=>{
        if(err) return next(err)
        return res.status(200).json({success:true , message:" Order Updated successfully !",data :result})
    })
}

const deleteOrder = (req,res) =>{
    deleteOrderModel(req.params.id,(err,result) =>{
        if(err) return next(err)
        return res.status(200).json({success:true , message:" Order deleted successfully !",data :result})
    })
}

export {createOrder,listOrders,getOrder,updateOrder,deleteOrder}


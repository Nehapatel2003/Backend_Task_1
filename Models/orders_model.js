import connection from "../config/config.js";


const createOrderModel = (order , callback) =>{
    connection.query("insert into orders set ?" ,[order],callback);
}

const listOrderModel =(callback) =>{
    connection.query("select * from orders" , callback)
}

const getOrderModel =(id , callback) =>{
    connection.query("select * from orders where id = ?",[id], callback)
}

const updateOrderModel=(order , callback) =>{
    connection.query("update orders  SET status = ? WHERE id = ?",order, callback);
}

const deleteOrderModel= (id ,callback) =>{
    connection.query("delete from orders where id =?",[id],callback)
}

export {createOrderModel,listOrderModel,getOrderModel,updateOrderModel,deleteOrderModel}
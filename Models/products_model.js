import connection from "../config/config.js";


const createProductModel = (product , callback) =>{
    connection.query("insert into products set ?" ,[product],callback);
}

const listProductModel =(callback) =>{
    connection.query("select * from products" , callback)
}

const getProductModel =(id , callback) =>{
    connection.query("select * from products where id = ?",[id], callback)
}

const updateProductModel=(product , callback) =>{
    connection.query("update products SET name = ?, price = ?,stock = ? WHERE id = ?",[product.name, product.price,product.stock ,product.id], callback);
}

const deleteProductModel= (id ,callback) =>{
    connection.query("delete from products where id =?",[id],callback)
}

export {createProductModel,listProductModel,getProductModel,updateProductModel,deleteProductModel};
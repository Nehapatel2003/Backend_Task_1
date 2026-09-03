import connection from "../config/config.js";
import bcrypt from "bcrypt"

const createUserModel =async (user , callback) =>{
    let hashPass = await bcrypt.hash(user.password ,10)
    connection.query("insert into users (name,email,password,role) values(?,?,?,?)" ,[user.name,user.email,hashPass,user.role],callback);
}

const loginUserModel =(user ,callback) =>{
    connection.query("select * from users where id=?",[user.id],callback)
}

const listUserModel =(callback) =>{
    connection.query("select * from users" , callback)
}

const getUserModel =(id , callback) =>{
    connection.query("select * from users where id = ?",[id], callback)
}

const updataUserModel=(user , callback) =>{
    connection.query("update users SET name = ?, email = ? WHERE id = ?",[user.name, user.email, user.id], callback);
}

const deleteUserModel= (id ,callback) =>{
    connection.query("delete from users where id =?",[id],callback)
}

export {createUserModel,loginUserModel,listUserModel,getUserModel,updataUserModel,deleteUserModel};
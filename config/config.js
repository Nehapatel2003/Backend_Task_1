import mysql from 'mysql2';
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})

connection.connect((err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected !")
    }
})

export default connection;
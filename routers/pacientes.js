import { Router } from "express";
import dotenv from 'dotenv';
import mysql from 'mysql2'

let storagePacientes = Router();

dotenv.config();
let conex = undefined;
storagePacientes.use((req,res,next)=>{
    let my_config= JSON.parse(process.env.MY_CONNECT);
    conex = mysql.createPool(my_config);
    next();
})
storagePacientes.get("/", (req,res)=>{
    conex.query(
        `SELECT * FROM usuario ORDER BY usu_nombre ASC`,
        (err,data,fill)=>{
            res.send(JSON.stringify(data));
        }
    );
})
storagePacientes.post("/",(req,res)=>{
   
    const {id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at}=req.body;

conex.query(
    `INSERT INTO bodegas (id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at],
    (err,data, fil)=>{
        if(err){
            console.log(err)
            res.status(500).send("Error al guardar los datos")

        }else{
            res.send("Agregado con exito")
        }
    }
)
})


export default storagePacientes;

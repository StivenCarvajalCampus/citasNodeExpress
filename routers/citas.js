import { Router } from "express";
import dotenv from 'dotenv';
import mysql from 'mysql2'

let storageCitas = Router();

dotenv.config();
let conex = undefined;
storageCitas.use((req,res,next)=>{
    let my_config= JSON.parse(process.env.MY_CONNECT);
    conex = mysql.createPool(my_config);
    next();
})
storageCitas.get("/", (req,res)=>{
    conex.query(
        `SELECT * FROM cita ORDER BY cit_fecha ASC`,
        (err,data,fill)=>{
            res.send(JSON.stringify(data));
        }
    );
})
storageCitas.get("/:cit_medico",(req,res)=>{
    conex.query(
        `SELECT * FROM cita where cit_medico=${req.params.cit_medico}`,
        (err,data,fill)=>{
            res.send(JSON.stringify(data));
        }
    )
})

storageCitas.get("/usuario/:cit_datosUsuario",(req,res)=>{
    conex.query(
        `SELECT * FROM cita where cit_datosUsuario=${req.params.cit_datosUsuario}`,
        (err,data,fill)=>{
            res.send(JSON.stringify(data));
        }
    )
})

storageCitas.get("/usuario/fechas/:cit_fecha",(req,res)=>{
    conex.query(
        `SELECT * FROM cita where DATE (cit_fecha)=${req.params.cit_fecha}`,
        (err,data,fill)=>{
            res.send(JSON.stringify(data));
        }
    )
})
storageCitas.post("/",(req,res)=>{
   
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


export default storageCitas;

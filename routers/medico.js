import { Router } from "express";
import dotenv from 'dotenv';
import mysql from 'mysql2'

let storageMedico = Router();

dotenv.config();
let conex = undefined;
storageMedico.use((req,res,next)=>{
    let my_config= JSON.parse(process.env.MY_CONNECT);
    conex = mysql.createPool(my_config);
    next();
})
storageMedico.get("/:especialidad", (req,res)=>{
    conex.query(
        `SELECT * FROM medico where med_especialidad=${req.params.especialidad}`,
        (err,data,fill)=>{
            res.send(JSON.stringify(data));
        }
    );
})

storageMedico.get("/", (req,res)=>{
    conex.query(
        `SELECT med_nombrecompleto, med_consultorio FROM medico`,
        (err,data,fill)=>{  
            res.send(JSON.stringify(data));
        }
    );
})
storageMedico.get("/especialidad/:medico/:dia", (req,res)=>{
    console.log("hola");
    let data = req.params; 
    conex.query(
               `SELECT medico.med_nroMatriculaProfesional as matricula, medico.med_nombrecompleto as medico, cita.cit_fecha as fecha, COUNT(medico.med_nroMatriculaProfesional) as cantidad FROM medico INNER JOIN cita ON cita.cit_medico = medico.med_nroMatriculaProfesional where medico.med_nroMatriculaProfesional=? and cita.cit_fecha=?;`,
               Object.values(data),
               (err,data,fill)=>{
            res.send(JSON.stringify(data));
        }
    );
})
storageMedico.post("/",(req,res)=>{
   
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


export default storageMedico;

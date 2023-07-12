import dotenv from 'dotenv';
import express from 'express';
import storagePacientes from './routers/pacientes.js';
import storageCitas from './routers/citas.js';

dotenv.config();
const appExpress = express();
const config = JSON.parse(process.env.MY_CONFIG);
appExpress.use(express.json());
appExpress.use("/pacientes", storagePacientes);
appExpress.use("/citas", storageCitas);
appExpress.listen(config, ()=>console.log(`Hola mundo, http://${config.hostname}:${config.port}`));

//console.log(process.env.MY_CONFIG) =>Me muestra lo que esta dentro de MY_CONFIG que es una variable de entorno 

//Creacion de un ruta => EndPoint

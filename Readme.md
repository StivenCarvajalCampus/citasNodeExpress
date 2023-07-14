Body usuarios 

```
"usu_id":"4",

  "usu_nombre":"jhon ",

  "usu_segdo_nombre":"eduardo",

  "usu_primer_apellido_usuar":"paca",

  "usu_segdo_apellido_usuar":"garse",

  "usu_telefono":"3102323",

  "usu_direccion":"asd12",

  "usu_email":"asas",

  "usu_tipodoc":"1",

  "usu_genero":"1",

  "usu_acudiente":"1"
```

body citas

```
{

"cit_codigo":"4",

"cit_fecha":"2023-08-09",

"cit_estadoCita":"1",

"cit_medico":"2",

"cit_datosUsuario":"1"

  }
```

enpoint medicos 

http://127.9.63.77:5015/medico/2

body medicos

```
{

"med_nroMatriculaProfesional":"13215651",

"med_nombrecompleto":"Stiven Carvajal",

"med_consultorio":"1",

"med_especialidad":"2"

  }
```

endpoint 5 citas

http://127.9.63.77:5015/citas/1356888

```
{

"cit_codigo":"4",

"cit_fecha":"2023-08-09",

"cit_estadoCita":"1",

"cit_medico":"2",

"cit_datosUsuario":"1"

}
```

endpoint 6 consultas para un paciente especifico

http://127.9.63.77:5015/citas/usuario/74

```
{

"cit_codigo":"4",

"cit_fecha":"2023-08-09",

"cit_estadoCita":"1",

"cit_medico":"2",

"cit_datosUsuario":"1"

}
```

endpoint 7 consulta para filtrar por fecha

http://127.9.63.77:5015/citas/usuario/fechas/'2023-04-05

'

```
{

"cit_codigo":"4",

"cit_fecha":"2023-08-09",

"cit_estadoCita":"1",

"cit_medico":"2",

"cit_datosUsuario":"1"

}
```

endpoint 8 consulta medicos consultorios

http://127.9.63.77:5015/medico

endpoint 9 consulta medicos cantiodad de citas 

http://127.9.63.77:5025/medico/especialidad/1356888/2023-09-10

endpoint 10 consulta medicos por dia especifico

http://127.9.63.77:5025/medico/especialidad/1356888/2023-09-10
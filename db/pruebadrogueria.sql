    CREATE DATABASE pruebadrogueria;
    USE pruebadrogueria;
    CREATE TABLE especialidad(
        esp_id INT (20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        esp_nombre VARCHAR (20) DEFAULT NULL
    );
    CREATE TABLE consultorio(
        cons_codigo INT (20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        cons_nombre VARCHAR (50) DEFAULT NULL
    );
    CREATE TABLE medico(
        med_nroMatriculaProfesional INT (20) UNSIGNED PRIMARY KEY,
        med_nombrecompleto VARCHAR(120) DEFAULT NULL,
        med_consultorio INT(20) UNSIGNED,
        med_especialidad INT (20) UNSIGNED
    );
    CREATE TABLE estado_cita(
        estcita_id INT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        estcita_nombre VARCHAR (20)
    ); 
    CREATE TABLE cita (
        cit_codigo INT (20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        cit_fecha DATE,
        cit_estadoCita INT (20) UNSIGNED,
        cit_medico INT (20) UNSIGNED,
        cit_datosUsuario INT (20) 
    );
    DROP TABLE cita;
    create table tipo_documento(
    tipdoc_id INT PRIMARY KEY AUTO_INCREMENT,
    tipdoc_nombre VARCHAR(20) default null,
    tipdoc_abreviatura VARCHAR(20) default null
);

    create table genero(
    gen_id INT PRIMARY KEY AUTO_INCREMENT,
    gen_nombre VARCHAR(20) default null,
    gen_abreviatura VARCHAR(20) default null
);

    create table acudiente(
    acu_codigo INT PRIMARY KEY AUTO_INCREMENT,
    acu_nombreCompleto VARCHAR(100) default null,
    acu_telefono VARCHAR(100) default null,
    acu_direccion VARCHAR(200)
);


    create table usuario(
    usu_id INT PRIMARY KEY AUTO_INCREMENT,
    usu_nombre VARCHAR(50) default null,
    usu_segdo_nombre VARCHAR(45) default null,
    usu_primer_apellido_usuar VARCHAR(50) default null,
    usu_segdo_apellido_usuar VARCHAR(50) default null,
    usu_telefono VARCHAR(50) default null,
    usu_direccion VARCHAR(100) default null,
    usu_email VARCHAR(100) default null,
    usu_tipodoc INT, 
    usu_genero INT, 
    usu_acudiente INT
);
    
    ALTER TABLE usuario ADD FOREIGN KEY(usu_tipodoc) REFERENCES tipo_documento(tipdoc_id);
    ALTER TABLE usuario ADD FOREIGN KEY(usu_genero) REFERENCES genero(gen_id);
    ALTER TABLE usuario ADD FOREIGN KEY(usu_acudiente) REFERENCES acudiente(acu_codigo);
    ALTER TABLE medico ADD FOREIGN KEY (med_consultorio) REFERENCES consultorio (cons_codigo);
    ALTER TABLE medico ADD FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id);
    ALTER TABLE cita ADD FOREIGN KEY (cit_medico) REFERENCES medico(med_nroMatriculaProfesional);
    ALTER TABLE cita ADD FOREIGN KEY(cit_estadoCita) REFERENCES estado_cita(estcita_id);
    ALTER TABLE cita ADD FOREIGN KEY (cit_datosUsuario) REFERENCES usuario(usu_id);


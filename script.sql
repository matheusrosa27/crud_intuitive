DROP DATABASE IF EXISTS intuitive;
CREATE DATABASE intuitive;
USE intuitive;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

CREATE TABLE dados(
	registro_ans int,
    cnpj varchar(255), 
    razao_social varchar(255),
    nome_fantasia varchar(255),
    modalidade varchar(255),
    logradouro varchar(255),
    log_numero varchar(255),
    log_complemento varchar(255),
    bairro varchar(255),
    cidade varchar(255),
    uf varchar(2),
    cep varchar(8),
    ddd varchar(2),
    telefone varchar(9),
    fax varchar(6),
    email varchar(255),
    representante varchar(255),
    cargo_representante varchar(255),
    data_registro_ans varchar(10)
);

SET GLOBAL local_infile=1;
SET SQL_SAFE_UPDATES = 0;

LOAD DATA local INFILE 'D:\\temp\\crud_intuitive\\Relatorio_cadop.csv' 
INTO TABLE dados 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

select * from dados where registro_ans > 0;

select * from dados where registro_ans = 417734;
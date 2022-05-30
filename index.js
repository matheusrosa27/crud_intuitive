let express = require('express');
let mysql = require('mysql');
let app = express();
let conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'intuitive'
});


app.use(express.static('public'));
conexao.connect(
    (erro) => {
        if (erro) {
            console.log('Erro ao conectar:');
            console.log(erro);
        } else {
            console.log('Conexão realizada com sucesso!');
        }
    }
);

app.get("/",(req,res) => {
    res.sendFile(__dirname+"/public/index.html");
});

app.get("/public/functions.js",(req,res) => {
    res.sendFile(__dirname+"/public/functions.js");
});

app.get("/consultTable",(req,res) => {
    conexao.query("SELECT * FROM dados WHERE registro_ans > 0",
    (erro,resultado) => {
        if(erro) {
            console.log(erro);
            res.send("Deu erro");
        } else {
            res.send(resultado);
        }
    });
});

app.get("/consultTableCond", (req,res) => {
    let reg_ans = req.query.reg_ans;
    conexao.query("SELECT * FROM dados WHERE registro_ans = ?",[reg_ans],
    (erro,resultado) => {
        if(erro) {
            console.log(erro);
            res.send("Deu erro");
        } else {
            res.send(resultado);
        }
    });
});




app.get("/insert",(req,res) => {
    let reg_ans = req.query.reg_ans;
    let cnpj = req.query.cnpj;
    let raz_soc = req.query.raz_soc;
    let nome_fantasia = req.query.nome_fantasia;
    let modal = req.query.modal;
    let logradouro = req.query.logradouro;
    let log_num = req.query.log_num;
    let log_comp = req.query.log_comp;
    let bairro = req.query.bairro;
    let uf = req.query.uf;
    let cidade = req.query.cidade;
    let cep = req.query.cep;
    let ddd = req.query.ddd;
    let telefone = req.query.telefone;
    let fax = req.query.fax;
    let email = req.query.email;
    let representante = req.query.representante;
    let carg_rep = req.query.carg_rep;
    let data_reg_ans = req.query.data_reg_ans;
    if (!reg_ans || !cnpj || !raz_soc || !modal || !logradouro || !log_num || !bairro || !uf || !cidade || !cep || !email || !representante || !carg_rep || !data_reg_ans){
        res.status(400).send('Há campos obrigatórios vazios!')
    } else {
        conexao.query("INSERT INTO dados (registro_ans, cnpj, razao_social, nome_fantasia, modalidade, logradouro, log_numero, log_complemento, bairro, cidade, uf, cep, ddd, telefone, fax, email, representante, cargo_representante, data_registro_ans) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[reg_ans, cnpj, raz_soc, nome_fantasia, modal, logradouro, log_num, log_comp, bairro, cidade, uf, cep, ddd, telefone, fax, email, representante, carg_rep, data_reg_ans],
        (erro,resultado) => {
            if(erro) {
                console.log(erro);
                res.status(500).send(erro);
                res.send('Erro!');
            } else {
                console.log('Adicionado com sucesso!');
                res.send('Adicionado com sucesso!');
            }
        });
    }
});

app.get("/update",(req, res) => {
    let reg_ans = req.query.reg_ans;
    let cnpj = req.query.cnpj;
    let raz_soc = req.query.raz_soc;
    let nome_fantasia = req.query.nome_fantasia;
    let modal = req.query.modal;
    let logradouro = req.query.logradouro;
    let log_num = req.query.log_num;
    let log_comp = req.query.log_comp;
    let bairro = req.query.bairro;
    let uf = req.query.uf;
    let cidade = req.query.cidade;
    let cep = req.query.cep;
    let ddd = req.query.ddd;
    let telefone = req.query.telefone;
    let fax = req.query.fax;
    let email = req.query.email;
    let representante = req.query.representante;
    let carg_rep = req.query.carg_rep;
    let data_reg_ans = req.query.data_reg_ans;

    if (cnpj != 0){
        conexao.query("UPDATE dados SET cnpj = ? WHERE registro_ans = ?",[cnpj, reg_ans],
        (erro,resultado) => {
            if(erro) {
                console.log(erro);
                res.status(500).send(erro);
                res.send("Deu erro");
            } else {
                console.log('Atualizado com sucesso!');
                res.send(resultado);
            }
        });
    } else {
        
    }

    if (raz_soc != 'empty'){
        conexao.query("UPDATE dados SET razao_social = ? WHERE registro_ans = ?",[raz_soc, reg_ans],
        (erro,resultado) => {
            if(erro) {
                console.log(erro);
                res.status(500).send(erro);
                res.send("Deu erro");
            } else {
                console.log('Atualizado com sucesso!');
                res.send(resultado);
            }
        });
    } else {

    }

    if (nome_fantasia != null){

    }

    if (modal != null){

    }

    if (logradouro != null){

    }

    if (log_num != null){

    }

    if (log_comp != null){

    }

    if (bairro != null){

    }

    if (uf != null){

    }

    if (cidade != null){

    }

    if (cep != 0){

    }
    
    if (ddd != 0){

    }

    if (telefone != 0){

    }

    if (fax != 0){

    }

    if (email != null){

    }

    if (representante != null){

    }

    if (carg_rep != null){

    }

    if (data_reg_ans != null){

    }
})

app.get("/delete",(req,res) => {
    let reg_ans = req.query.reg_ans;

    if (!reg_ans){
        res.status(400).send('Digite um Registro ANS!');
    } else {
        conexao.query("DELETE FROM dados WHERE registro_ans=?", [reg_ans],
        (erro,resultado) => {
            if(erro) {
                console.log(erro);
                res.status(500).send(erro);
                res.send("Deu erro");
            } else {
                res.send(resultado);
            }
        });
    }
});

app.listen(3000);

/*
UPDATE dados
SET cnpj = cnpj, nome_fantasia = 'Bilabilu'
WHERE registro_ans = 417734;
*/
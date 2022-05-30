function insert(){
    let reg_ans = document.getElementById('reg_ans').value;
    let cnpj = document.getElementById('cnpj').value;
    let raz_soc = document.getElementById('raz_soc').value;
    let nome_fantasia = document.getElementById('nome_fantasia').value;
    let modal = document.getElementById('modal').value;
    let logradouro = document.getElementById('logradouro').value;
    let log_num = document.getElementById('log_num').value;
    let log_comp = document.getElementById('log_comp').value;
    let bairro = document.getElementById('bairro').value;
    let uf = document.getElementById('uf').value;
    let cidade = document.getElementById('cidade').value;
    let cep = document.getElementById('cep').value;
    let ddd = document.getElementById('ddd').value;
    let telefone = document.getElementById('telefone').value;
    let fax = document.getElementById('fax').value;
    let email = document.getElementById('email').value;
    let representante = document.getElementById('representante').value;
    let carg_rep = document.getElementById('carg_rep').value;
    let data_reg_ans = document.getElementById('data_reg_ans').value;

    if(reg_ans < 111111 || reg_ans > 999999){
        window.alert('Registro ANS inválido');
    } else if (!reg_ans || !cnpj || !raz_soc || !modal || !logradouro || !log_num || !bairro || !uf || !cidade || !cep || !email || !representante || !carg_rep || !data_reg_ans){
        window.alert('Preencha os campos obrigatórios!');
    } else {
        fetch("/insert?reg_ans="+reg_ans+"&cnpj="+cnpj+"&raz_soc="+raz_soc+"&nome_fantasia="+nome_fantasia+"&modal="+modal+"&logradouro="+logradouro+"&log_num="+log_num+"&log_comp="+log_comp+"&bairro="+bairro+"&cidade="+cidade+"&uf="+uf+"&cep="+cep+"&ddd="+ddd+"&telefone="+telefone+"&fax="+fax+"&email="+email+"&representante="+representante+"&carg_rep="+carg_rep+"&data_reg_ans="+data_reg_ans).then();
        window.alert('Adicionado com Sucesso!')
    }
}

function update(){
    let reg_ans = document.getElementById('reg_ans').value;
    let cnpj = document.getElementById('cnpj').value;
    let raz_soc = document.getElementById('raz_soc').value;
    let nome_fantasia = document.getElementById('nome_fantasia').value;
    let modal = document.getElementById('modal').value;
    let logradouro = document.getElementById('logradouro').value;
    let log_num = document.getElementById('log_num').value;
    let log_comp = document.getElementById('log_comp').value;
    let bairro = document.getElementById('bairro').value;
    let uf = document.getElementById('uf').value;
    let cidade = document.getElementById('cidade').value;
    let cep = document.getElementById('cep').value;
    let ddd = document.getElementById('ddd').value;
    let telefone = document.getElementById('telefone').value;
    let fax = document.getElementById('fax').value;
    let email = document.getElementById('email').value;
    let representante = document.getElementById('representante').value;
    let carg_rep = document.getElementById('carg_rep').value;
    let data_reg_ans = document.getElementById('data_reg_ans').value;

    if(reg_ans < 111111 || reg_ans > 999999){
        window.alert('Registro ANS inválido');
    } else if (!reg_ans || !cnpj || !raz_soc || !modal || !logradouro || !log_num || !bairro || !uf || !cidade || !cep || !email || !representante || !carg_rep || !data_reg_ans){
        window.alert('Preencha os campos obrigatórios!');
    } else {
        fetch("/update?reg_ans="+reg_ans+"&cnpj="+cnpj+"&raz_soc="+raz_soc+"&nome_fantasia="+nome_fantasia+"&modal="+modal+"&logradouro="+logradouro+"&log_num="+log_num+"&log_comp="+log_comp+"&bairro="+bairro+"&cidade="+cidade+"&uf="+uf+"&cep="+cep+"&ddd="+ddd+"&telefone="+telefone+"&fax="+fax+"&email="+email+"&representante="+representante+"&carg_rep="+carg_rep+"&data_reg_ans="+data_reg_ans).then();
        window.alert('Atualizado com Sucesso!')
    }

}

function delet(){
    let reg_ans = document.getElementById('reg_ans').value;

    if (window.confirm('Isso deletará o Registro ANS '+reg_ans+', você tem certeza disso?')){
        fetch("/delete?reg_ans="+reg_ans).then();
        window.alert('Registro ANS '+reg_ans+' deletado com sucesso!');
    }
}

function search(){
    let empty = document.getElementById('bodyTable').innerHTML = '';
    let reg_ans = document.getElementById('searchInput').value;

    if (reg_ans == 0){
        table();
    } else {
        fetch("/consultTableCond?reg_ans="+reg_ans).then((response) => {
            return response.json().then((json) => {
                let tabela = document.getElementById("bodyTable");
                for (let index = 0; index < json.length; index++) {
                    const dados = json[index];
                    let  linha=  tabela.insertRow();
                    let cellRegANS =  linha.insertCell();
                    let cellCNPJ =  linha.insertCell();
                    let cellRazSoc =  linha.insertCell();
                    let cellNomeFant =  linha.insertCell();
                    let cellModal =  linha.insertCell();
                    let cellLogradouro =  linha.insertCell();
                    let cellLogNum =  linha.insertCell();
                    let cellLogCom =  linha.insertCell();
                    let cellBairro =  linha.insertCell();
                    let cellCidade =  linha.insertCell();
                    let cellUF =  linha.insertCell();
                    let cellCEP =  linha.insertCell();
                    let cellDDD =  linha.insertCell();
                    let cellTelefone =  linha.insertCell();
                    let cellFax =  linha.insertCell();
                    let cellEmail =  linha.insertCell();
                    let cellRep =  linha.insertCell();
                    let cellCargRep =  linha.insertCell();
                    let cellDataRegANS =  linha.insertCell();
                     
                    cellRegANS.innerText = dados.registro_ans;
                    cellCNPJ.innerText = dados.cnpj;
                    cellRazSoc.innerText = dados.razao_social;
                    cellNomeFant.innerText = dados.nome_fantasia;
                    cellModal.innerText = dados.modalidade;
                    cellLogradouro.innerText = dados.logradouro;
                    cellLogNum.innerText = dados.log_numero;
                    cellLogCom.innerText = dados.log_complemento;
                    cellBairro.innerText = dados.bairro;
                    cellCidade.innerText = dados.cidade;
                    cellUF.innerText = dados.uf;
                    cellCEP.innerText = dados.cep;
                    cellDDD.innerText = dados.ddd;
                    cellTelefone.innerText = dados.telefone;
                    cellFax.innerText = dados.fax;
                    cellEmail.innerText = dados.email;
                    cellRep.innerText = dados.representante;
                    cellCargRep.innerText = dados.cargo_representante;
                    cellDataRegANS.innerText = dados.data_registro_ans;
                }
        
            });
        })
    }
    
}

function table() {
    fetch("/consultTable").then((response) => {
    return response.json().then((json) => {
        let tabela = document.getElementById("bodyTable");
        for (let index = 0; index < json.length; index++) {
            const dados = json[index];
            let  linha=  tabela.insertRow();
            let cellRegANS =  linha.insertCell();
            let cellCNPJ =  linha.insertCell();
            let cellRazSoc =  linha.insertCell();
            let cellNomeFant =  linha.insertCell();
            let cellModal =  linha.insertCell();
            let cellLogradouro =  linha.insertCell();
            let cellLogNum =  linha.insertCell();
            let cellLogCom =  linha.insertCell();
            let cellBairro =  linha.insertCell();
            let cellCidade =  linha.insertCell();
            let cellUF =  linha.insertCell();
            let cellCEP =  linha.insertCell();
            let cellDDD =  linha.insertCell();
            let cellTelefone =  linha.insertCell();
            let cellFax =  linha.insertCell();
            let cellEmail =  linha.insertCell();
            let cellRep =  linha.insertCell();
            let cellCargRep =  linha.insertCell();
            let cellDataRegANS =  linha.insertCell();
             
            cellRegANS.innerText = dados.registro_ans;
            cellCNPJ.innerText = dados.cnpj;
            cellRazSoc.innerText = dados.razao_social;
            cellNomeFant.innerText = dados.nome_fantasia;
            cellModal.innerText = dados.modalidade;
            cellLogradouro.innerText = dados.logradouro;
            cellLogNum.innerText = dados.log_numero;
            cellLogCom.innerText = dados.log_complemento;
            cellBairro.innerText = dados.bairro;
            cellCidade.innerText = dados.cidade;
            cellUF.innerText = dados.uf;
            cellCEP.innerText = dados.cep;
            cellDDD.innerText = dados.ddd;
            cellTelefone.innerText = dados.telefone;
            cellFax.innerText = dados.fax;
            cellEmail.innerText = dados.email;
            cellRep.innerText = dados.representante;
            cellCargRep.innerText = dados.cargo_representante;
            cellDataRegANS.innerText = dados.data_registro_ans;
            
        }

        });
    })
}  

function checkbox(){
    let cnpj = document.getElementById('checkCnpj');
    let raz = document.getElementById('checkRaz');
    let nom = document.getElementById('checkNom');
    let mod = document.getElementById('checkMod');
    let log = document.getElementById('checkLog');
    let num = document.getElementById('checkNum');
    let comp = document.getElementById('checkComp');
    let bai = document.getElementById('checkBai');
    let uf = document.getElementById('checkUf');
    let cid = document.getElementById('checkCid');
    let cep = document.getElementById('checkCep');
    let ddd = document.getElementById('checkDdd');
    let tel = document.getElementById('checkTel');
    let fax = document.getElementById('checkFax');
    let email = document.getElementById('checkEmail');
    let rep = document.getElementById('checkRep');
    let carg = document.getElementById('checkCarg');
    let data = document.getElementById('checkData');

    let cnpj2 = document.getElementById('cnpj');
    let raz2 = document.getElementById('raz_soc');
    let nom2 = document.getElementById('nome_fantasia');
    let mod2 = document.getElementById('modal');
    let log2 = document.getElementById('logradouro');
    let num2 = document.getElementById('log_num');
    let comp2 = document.getElementById('log_comp');
    let bai2 = document.getElementById('bairro');
    let uf2 = document.getElementById('uf');
    let cid2 = document.getElementById('cidade');
    let cep2 = document.getElementById('cep');
    let ddd2 = document.getElementById('ddd');
    let tel2 = document.getElementById('telefone');
    let fax2 = document.getElementById('fax');
    let email2 = document.getElementById('email');
    let rep2 = document.getElementById('representante');
    let carg2 = document.getElementById('carg_rep');
    let data2 = document.getElementById('data_reg_ans');

    if (cnpj.checked == true){
        cnpj2.style.display = "block";
    } else {
        cnpj2.style.display = "none";
    }
    
    if (raz.checked == true){
        raz2.style.display = "block";
    } else {
        raz2.style.display = "none";
    }
    
    if (nom.checked == true){
        nom2.style.display = "block";
    } else {
        nom2.style.display = "none";
    }
    
    if (mod.checked == true){
        mod2.style.display = "block";
    } else {
        mod2.style.display = "none";
    }
    
    if (log.checked == true){
        log2.style.display = "block";
    } else {
        log2.style.display = "none";
    }
    
    if (num.checked == true){
        num2.style.display = "block";
    } else {
        num2.style.display = "none";
    }
    
    if (comp.checked == true){
        comp2.style.display = "block";
    } else {
        comp2.style.display = "none";
    }
    
    if (bai.checked == true){
        bai2.style.display = "block";
    } else {
        bai2.style.display = "none";
    }
    
    if (uf.checked == true){
        uf2.style.display = "block";
    } else {
        uf2.style.display = "none";
    }
    
    if (cid.checked == true){
        cid2.style.display = "block";
    } else {
        cid2.style.display = "none";
    }
    
    if (cep.checked == true){
        cep2.style.display = "block";
    } else {
        cep2.style.display = "none";
    }
    
    if (ddd.checked == true){
        ddd2.style.display = "block";
    } else {
        ddd2.style.display = "none";
    }
    
    if (tel.checked == true){
        tel2.style.display = "block";
    } else {
        tel2.style.display = "none";
    }
    
    if (fax.checked == true){
        fax2.style.display = "block";
    } else {
        fax2.style.display = "none";
    }
    
    if (email.checked == true){
        email2.style.display = "block";
    } else {
        email2.style.display = "none";
    }
    
    if (rep.checked == true){
        rep2.style.display = "block";
    } else {
        rep2.style.display = "none";
    }
    
    if (carg.checked == true){
        carg2.style.display = "block";
    } else {
        carg2.style.display = "none";
    }
    
    if (data.checked == true){
        data2.style.display = "block";
    } else {
        data2.style.display = "none";
    }

}
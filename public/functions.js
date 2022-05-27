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


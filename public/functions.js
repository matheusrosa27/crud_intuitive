function buscar() {
    fetch("/consultarTabela").then((response) => {
    return response.json().then((json) => {
        let tabela = document.getElementById("corpoTabela");
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


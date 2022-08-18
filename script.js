function cadastrar(){
    console.log('cadastrando')
    var qtdPessoas = document.getElementById('qtdPessoas').value;
    var htmlFinal = '';
    for(var i = 0; i < qtdPessoas; i++){
      htmlFinal += 'Nome: <input> <br/>';
    }
    document.getElementById('pessoas').innerHTML = htmlFinal;
}
  


var lista = ["Mogus", "Din", "Gus"];

function preencherSelect(){
    var htmlFinal = '';
    var tamanhoLista = lista.length;
    for(var i = 0; i < tamanhoLista; i++){
      htmlFinal += '<option>'+lista[i]+"</option>";
    }
    document.getElementById('meuSelect').innerHTML = htmlFinal;
}

function adicionarItem(){
    var valorInput= document.getElementById('inputItem').value;
    lista.push(valorInput);
    preencherSelect();
}

function apagarItem(){
    var valorSelecionado = document.getElementById('meuSelect').value;
    lista.splice(valorSelecionado,lista.indexOf(valorSelecionado)+1);
    preencherSelect();  
}
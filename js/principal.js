var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso/ (altura*altura);
    console.log(tdImc);
    console.log(imc);
    tdImc.textContent = imc.toFixed(2); 
}

var cadastro = document.querySelector("#cadastro");

var botao = cadastro.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
    event.preventDefault();
    var nomeCadastro = cadastro.nome.value;
    var alturaCadastro = cadastro.altura.value;
    var pesoCadastro = cadastro.peso.value;
    var gorduraCadastro = cadastro.gordura.value;
    var imcCadastro = pesoCadastro/ (alturaCadastro*alturaCadastro);

    var pacienteTr = document.createElement("tr"); 
    
    var nomeTd = document.createElement("td"); 
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    nomeTd.textContent = nomeCadastro;
    alturaTd.textContent = alturaCadastro;
    pesoTd.textContent = pesoCadastro;
    gorduraTd.textContent = gorduraCadastro;
    imcTd.textContent = imcCadastro.toFixed(2);
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    console.log(pacienteTr);
});

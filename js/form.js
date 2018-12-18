var cadastro = document.querySelector("#cadastro");

var botao = cadastro.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
    event.preventDefault();
    var paciente = criarPaciente(cadastro);
    var tr = criarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(tr);
});

function calculaIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);

}

function criarPaciente(form){
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaIMC(peso,altura);
    }
}

function criarTr(paciente){
    var pacienteTr = document.createElement("tr"); 
       
    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));

    
    return tr;
}

function criarTd(dado, classe){
    var td = document.createElement("td");
    td.textContent= dado;
    td.classList.add(classe);

    return td;
}
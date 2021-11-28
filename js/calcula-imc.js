var titulo = document.querySelector(".titulo");
titulo.textContent = "Calculando imc Brendo jonch";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); //Filtra a clase info peso do id paciente dentro do html
    var peso = tdPeso.textContent; //coleta somente peso numero

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc"); //coleta imc do html

    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura);


    if (!pesoEhValido) {
        console.log("Peso invalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido") // busca class dentro do css e add aqui no js
    }

    if (!alturaEhValida) {
        console.log("Altura invalido")
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); // transforma o imc dentro do html na variavel imc toFixed escolhe quantidade de casas decimais
    }

}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso <1000){
        return true;
    } else {
        return false;
    }

}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("buscando pacientes");

    var xhr = new XMLHttpRequest(); // RESPONSAVEL POR FAZER REQUISICOES HTTP

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // analogo a colocar url no navegador

    xhr.addEventListener("load", function () {

        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta);
            //tecnina ajax,de forma assincrono, ele n trava o js para ir buscar algo..
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log("xhr.status");
            console.log("xhr.responseText");

            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send(); // analogo ao enter no navegador
});




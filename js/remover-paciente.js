var pacientes = document.querySelectorAll("table");// funcao criada para remover paciente da tabela

pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function (event) { //dblclick e o navegador es    cutando 2 clicks
        // var alvoEvento = event.target;
        // var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
        // paiDoAlvo.remove();
        //event.target.parentNode.remove();
        //TUDO ISSO ACIMA E PARA EXPLICAR O EVENTO DEBAIXO.
        event.target.parentNode.classList.add("fadeOut"); // Parentnode e para usar o pai. target e o alvo. ClassListAdd adicionar css

        setTimeout(function () {
            event.target.parentNode.remove();// remove e remover 
        }, 500);// 500 e os milisegundos da espera dessa funcao ser ativada em relação a outra, para causar efeito do css "fadeout"







    });


});
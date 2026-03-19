function insere_visor (digito) {
    let visor = document.getElementById('visor');
    if (visor.value === "0") {
        visor.value = digito;
    } else {
        visor.value += digito;
    }
}

function limpar_tudo() {
    document.getElementById('visor').value='0';
}

function resultado_visor (resultado) {
    document.getElementById('visor').value = resultado;
}

function calcular (resultado_visor) {
    let expressao = document.getElementById('visor').value;
    try {
        let resultado = eval(expressao);
        resultado_visor(resultado);
    } catch (erro) {
        resultado_visor('Erro')
    }
}
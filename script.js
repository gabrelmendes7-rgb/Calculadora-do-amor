function insere_visor (digito) {
    let visor = document.getElementById('visor');
    if (visor.innerText === "0") {
        visor.innerText = digito;
    } else {
        visor.innerText += digito;
    }
}

function limpar_tudo() {
    document.getElementById('visor').innerText='0';
}

function resultado_visor (resultado) {
    document.getElementById('visor').innerText = resultado;
}

function calcular (resultado_visor) {
    let expressao = document.getElementById('visor').innerText;
    try {
        let resultado = eval(expressao);
        resultado_visor(resultado);
    } catch (erro) {
        resultado_visor('Erro')
    }
}
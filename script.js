document.addEventListener("DOMContentLoaded", function () {

    const display = document.querySelector("label");
    const botoes = document.querySelectorAll("button");

    let expressao = "";

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {

            let valor = this.innerText;

            if (valor === "=") {
                if (expressao === "") {
                    return;
                }

                try {
                    expressao = expressao.replace("X", "*");
                    display.innerText = eval(expressao);
                    expressao = display.innerText;
                } catch {
                    display.innerText = "Erro";
                    expressao = "";
                }
            }

            else if (valor === "LT") {
                expressao = "";
                display.innerText = "0";
            }

            else if (valor === "L") {
                expressao = expressao.slice(0, -1);
                display.innerText = expressao || "0";
            }

            else {
                expressao += valor;
                display.innerText = expressao;
            }

        });
    });

});
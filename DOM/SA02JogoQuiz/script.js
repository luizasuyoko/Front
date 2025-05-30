//script para as perguntas do quiz

let perguntas = [];
let perguntasAtual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let resultadoElement = document.getElementById("resultado");

//carregar as perguntas do arquivo json
fetch("perguntas.json")
.then(response => response.json())
.then(data =>{
    perguntas = data;
    carregarPerguntas();
}).catch(error => console.error("Erro ao carregar pegunta: ", error));

//criar função para carregar as perguntas no html
function carregarPerguntas(){
    resultadoElement.innerText = "";
    proximaElement.disabled = true;

    if(perguntasAtual>=perguntas.length){
        //quando o index for maior ou igual ao num de perguntas
        perguntaElement.innerText = "Quiz Finalizado!";
        opcoesElement.innerHTML = "";
        proximaElement.style.display = "none";
        return;
    }
    //escrever codigo para mostrar perguntas
    let p = perguntas[perguntasAtual]; //coleção referente o indice
    perguntaElement.innerText = p.pergunta;
    opcoesElement.innerHTML = "";
    //preencher as opcoes
    p.opcoes.forEach(opcao => {
        let btn0pcao = document.createElement("button");
        btn0pcao.innerText = opcao;
        btn0pcao.classList.add("opcao");
        btn0pcao.addEventListener("click", ()=> verificarResposta(opcao, btn0pcao));
        opcoesElement.appendChild(btn0pcao);
    });
    //funçaõ para verificar as respostas
    function verificarResposta(opcao,btn0pcao) {
        let respostaCorreta = perguntas[perguntasAtual].resposta;
        if(opcao === respostaCorreta){
            btn0pcao.classList.add("correta");
            resultadoElement.innerText = "Correto!!!";
        }else{
            btn0pcao.classList.add("errado");
            resultadoElement.innerText = "Errado!!! A resposta correta é: " +respostaCorreta;
        }
        //configuração para desabilitar os botões
        document.querySelectorAll(".opcao").forEach(botao => botao.disabled = true);
        proximaElement.disabled = false;
    }
    proximaElement.addEventListener("click", () => {
        perguntasAtual++;
        carregarPerguntas();
    });
}
//adicionar elementos avançados com DOM
//construir um cabeçalho com DOM

let header = document.createElement("header"); //criou elementos
header.style.backgroundColor = "black";
header.style.height = "8vh";
document.body.appendChild(header); //adicionando o header como elementos filho do body
document.body.style.margin = "0"; //retirando a margin do body

//adicionar elementos no header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue";
divNav.style.height = "100%";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Arial";

header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contato"];
//adicionar itens na Nav 
itensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    divNav.appendChild(item);
});

let footer = document.createElement("footer");
footer.style.backgroundColor = "gray";
footer.style.height = "10vh";
footer.style.position = "fixed";
footer.style.bottom = "0"
footer.style.width = "100%"
document.body.style.appendChild("footer")

let divfooter = document.createElement("div");
divfooter.style.display = "flex";
divfooter.style.justifyContent = "space-between";
divfooter.style.height = "100%";
divfooter.style.width = "90%";
divfooter.style.margin = "0 auto";
divfooter.style.alignItems = "start";
divfooter.style.color = "aliceblue"; //dps daq é só estilização
divfooter.style.fontSize = "2vh";
divfooter.style.fontFamily = "Comic Sans MS"
document.appendChild("divfooter");

//criar texto para o footer
let menufooter = ["End. Rua Senai, 1000", "Tel. 19-9999-9999", "E-mail: aaaaa@gmail.com", "@copyright 2025"];
//foreach para adicionar os itens no footer
menufooter.forEach(item => {
    let p = document.createElement("p");
    p.innerText = item;
    divfooter.appendChild("p");
});

//clonando elementos com DOM
let card = document.createElement("div");
card.classList.add("card"); //adiciona a class card no elemento
card.style.width = "120px";
card.style.height = "200px";
card.style.backgroundColor = "blue";

//criar container para adicionar os cards
let container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.margin = "0 auto";
container.style.width = "90%";
container.style.flexWrap = "wrap";
//criar um botao para clonar o card
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
btnClonar.id = "btnClonar";
document.body.appendChild("btnClonar"); //add btn ao body
document.body.appendChild("container"); //add container ao body
container.appendChild("card"); //add card ao container
//adicionar even ao botao
btnClonar.addEventListener("click", () =>{
    let clone = card.cloneNode(true); //clona o card
    container.appendChild("clone"); //add o clone ao container
});

//criar botao para adicionar modo escuro
let chave = document.createElement("input");
chave.type = "checkbox";
chave.id = "darkmode";
chave.style.position = "fixed";
chave.style.top = "10px";
chave.style.right = "10px";
document.body.appendChild("chave");
//criar um evento para adicionar o modo escuro
chave.addEventListener("change", ()=> {
    document.body.classList.toggle("darkmode");
});

 //eventos avançados com DOM
 //capturando letra digitada -> function
 document.addEventListener("keydown", (event)=>{
    console.log("Tecla pressionada: " +event.key);
 });
 
 //função para sugestao de texto -> 
 let input = document.createElement("input");
 input.type = "text";
 input.id = "busca";
 input.placeholder = "Dgite para buscar...";
 document.body.appendChild("input");
 //criar uma lista de sugestoes 
 let lista = document.createElement("ul");
 lista.id = "sugestao";
 document.body.appendChild("lista");
 //criar um vetor de sugestoes
 let sugestoes = [
    "Javascript", "Java", "Python", "C#", "PHP", "Dart", "Kotlin"
 ];

 //eventos para capturar o texto e sugerir
 document.getElementById("busca").addEventListener("keyup", ()=> {
    let texto = this.value.toLowerCase();
    lista.innerHTML = "";
    sugestoes.forEach(sugestao => {
        if(sugestao.toLowerCase().includes(texto)){
            let item = document.createElement("li");
            //selecionar as palavras da lista ao clicar
            item.style.cursor = "pointer"
            item.addEventListener("click", ()=> {
                input.value = sugestao;
                lista.innerHTML = "";
            });
            item.innerText = sugestao;
            lista.appendChild(item); 
        };
    });
});

//criacao de formulaio e eventos de verificacao

let form = document.createElement("form");
form.id = "formCadrasto";
document.body.appendChild("form");
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Digite seu Nome";
inputNome.id = "nome";
form.appendChild("inputNome");

let inputEmail = document.createElement("input");
inputNome.type = "email";
inputNome.placeholder = "Digite seu Email";
inputNome.id = "email";
form.appendChild("inputEmail");
//botao d envio ]
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);
//adicipnar um "p"para mostrar as mensagens de validação do form
let p = document.createElement("p");
p.id = "mensagem";
document.body.appendChild(p);

//evento de validação do formulario
document.getElementById("formCadrasto").addEventListener("submit", (event) =>{
    event.preventDefault(); //nao recarrega a tela
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem");

    //condicao
    if( nome === "" || email === ""){
        mensagem.innerText = "Preencha Todos os Campos!";
        mensagem.style.color = "red";
    }else{
        mensagem.innerText = "Cadastro Realizado com Sucesso!!!";
        mensagem.style.color = "green";
        //limpar os campos
        nome = "";
        email = "";
    };
});
//Classe Produto
//Atributos: nome, preco, quantidade
//Métodos: vender, repor, exibirinfo

class Produto{
    #nome
    #preco
    #quantidade
    constructor(nome, preco, quantidade) {
        this.#nome = nome;
        this.#preco = preco;
        this.#quantidade = quantidade;
    }
    vender(quantidade){
        if(this.#quantidade >+ quantidade){
            this.#quantidade -= quantidade;
            console.log(`Venda realizada com sucesso! Estoque atual: ${this.#quantidade}`);
        }else{
            console.log(`Estoque insuficiente!, Estoque atual: ${this.#quantidade}`);
        }
    }
    repor(quantidade){
        this.#quantidade += quantidade; //(+=) estoque = estoque + quantidade
        console.log(`Estoque Reposto! Estoque atual: ${this.#quantidade}`);
    }
    exibirInfo(){
        console.log(`Nome do Produto: ${this.#nome}, Preço: ${this.#preco}, Estoque: ${this.#quantidade}`)
    }
}

let prod1 = new Produto("sapato", 60, 10);
prod1.exibirInfo();
prod1.repor(10);
prod1.vender(10);
prod1.vender(20);
prod1.exibirInfo();
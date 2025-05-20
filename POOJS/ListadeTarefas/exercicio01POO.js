//Crie uma classe Pessoa
//atributos: nome, idade
//métodos apresentar()

class Pessoa{
    //atributos
    #nome
    #idade
    //construtor
    constructor(nome, idade){
        this.#idade = idade;
        this.#nome = nome;
    }
    //metodos
    apresentar(){
        console.log(`olá meu nome é ${this.#nome}, eu tenho ${this.#idade} anos.`)
    }
}

let pessoa1 = new Pessoa("João", 14);
pessoa1.apresentar();
//Crie uma classe Livro
//Atributos: titulo, autor, paginas
//Métodos exibirInfo()

class livro{
    #titulo
    #autor
    #paginas
    constructor(titulo, autor, paginas){
        this.#titulo = titulo;
        this.#autor = autor;
        this.#paginas = paginas;
    }
    exibirInfo(){
        console.log(`titulo: ${this.#titulo}, autor: ${this.#autor}, paginas: ${this.#paginas}`)
    }
}

let livro1 = new livro("livro1", "autor1", 200);
livro1.exibirInfo();
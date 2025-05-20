// Classe Aluno
// Atributos: nome, notas (array)
// Métodos: adicionarNota(nota), calcularMedia(), situacao() → (Aprovado se média ≥ 7)

class Aluno {
    #nome
    #notas
    constructor(nome, notas = []) {
        this.#nome = nome;
        this.#notas = notas;
    }

    adicionarNota(nota) {
        this.#notas.push(nota); 
    }

    calcularMedia() {
        const soma = this.#notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.#notas.length;
    }

    situacao() {
        const media = this.calcularMedia();
        return media >= 7 ? "Aprovado" : "Reprovado";
    }
}

let aluno1 = new Aluno("João", [10, 8, 7]);
aluno1.adicionarNota(9);
console.log("Média:", aluno1.calcularMedia()); // Média: 8.5
console.log("Situação:", aluno1.situacao()); // Situação: Aprovado
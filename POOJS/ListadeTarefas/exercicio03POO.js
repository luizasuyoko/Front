//Crie uma classe calculadora
//Métodos somar(a, b), subtrair(a, b), multiplicar(a, b), dividir(a, b)

class calculadora{
    #a
    #b
    constructor(a,b, resultado){
        this.#a = a;
        this.#b = b;
    }
    somar(quantidade){
        return this.#a + this.#b;
    }
    subtrair(quantidade){
        return this.#a - this.#b;
    }
    multiplicar(quantidade){
        return this.#a * this.#b;
    }
    dividir(quantidade){
        return this.#a / this.#b;
    }
}

let calc1 = new calculadora(10, 20);
console.log("Soma:", calc1.somar()); // 30
console.log("Subtração:", calc1.subtrair()); // -10
console.log("Multiplicação:", calc1.multiplicar()); // 200
console.log("Divisão:", calc1.dividir()); // 0.5
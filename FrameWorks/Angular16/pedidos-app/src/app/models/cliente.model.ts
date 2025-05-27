// class model para manipulação de dados

export class Cliente{
    // //atributos
    // public id: number;
    // public nome: string;

    // constructor(id: number, nome: string){
    //     this.id = id;
    //     this.nome = nome;
    // }

    // //métodos acesso publico
    // //getters and setters
    // public geId():number{
    //     return this.id;
    // }

    // public setId(id:number):void{
    //     this.id = id;
    // }

    //uma forma abreviada
    //somente abrevie com atributos publicos
    constructor(
        public id: number,
        public nome: string
    ){}
}
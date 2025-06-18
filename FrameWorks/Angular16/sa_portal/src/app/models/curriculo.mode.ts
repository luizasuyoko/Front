export class Curriculo {
    constructor(
        private _id: number,
        private _nome: string,
        private _telefone: string,
        private _email: string,
    ) {}

    public get id(): number {
        return this._id;
    }
    public set id(c: number){
        this._id = c;
    }

    public get nome(): string{
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get telefone(): string {
        return this._telefone;
    }
    public set telefone(value: string) {
        this._telefone = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    // Métodos de conversao de objetos
    //obj => Json
    public toMap():{[key:string]:any}{
        return {
            id: this._id,
            nome: this._nome,
            telefone: this._telefone,
            email: this._email
        }
    }
    //Json => obj
    static fromMap(map:any): Curriculo{
        return new Curriculo(
            map.id,
            map.nome,
            map.telefone,
            map.email,
        )
    }
}
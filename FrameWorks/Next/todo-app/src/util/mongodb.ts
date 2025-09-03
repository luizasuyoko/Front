//arquivo que vai auxiliar a conexão 

//importar a biblioteca di mongodb
import mongoose from "mongoose";

//arrow function
const connectMongo = async () =>{
    mongoose.connect(process.env.DATABASE_URL)
        .then(()=>console.log("Conecta ao MongoDB"))
        .catch(err => console.error("Erro ao conectar ao MongoDB", err));
}

export default connectMongo;
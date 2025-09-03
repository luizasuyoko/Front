//montar o schema da tabela 

import mongoose from "mongoose";

//function para definir o schema 
const TodoSchema = new mongoose.Schema({
    title:{
        type:String, 
        required:[true, "O título é Obrigatório"],
        trim: true,
        maxLength: [100, "não pode mais de 100char"]
        },
    completed:{
        type: Boolean,
        default: false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

export default TodoSchema;
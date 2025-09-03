// componente para criar formulário
//import do css
import "./ToDoForm.css"

import { useState } from "react"

const TodoForm = ({addTarefa}) => {
    //estado para armazenar o valor do input (campo para inserir a tarefa)
    const [tarefa, setTarefa] = useState("");
    //definir o useSate => usa a memoria local do navegador para armazenar as mudanças do estado
    //[primeiro campo o armazenamento, segundo campo a função da mudança de estado

    //função para atualizar o estado com o valor do input
    const handleSubmit = (e) => {
        //impedir o comportamento padrão do formulário 
        e.preventDefault();
        //verificar se o campo não esta vazio
        if(tarefa.trim() !==""){
            //adiciona a tarefa ao array de tarefas
            addTarefa(tarefa);
            //limpa o campo do input
            setTarefa(""); 
        }
    };
    return(
        //retorna o formulário (o view)
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Insira uma nova tarefa" value={tarefa} onChange={(e)=> setTarefa(e.target.value)}>
                <button type="submit">Adicionar</button>
            </input>
        </form>
    )
}
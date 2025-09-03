import {useState} from "react"

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  //estado para armazenamento da lista de tarefas 

  const addTarefa = (tarefa) => {
    setTarefa = ([...tarefas, tarefa]);
    //adicionar a nova tarray de tarefas, ...tarefas => copiar todas as tarefas
    //que já estao adiciondas anteriormente
  };

  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_,i)=>i!==index));
    //filtra o array de tarefas, removendo a tarefa com o índice igual ao index
    //(_,i) mantem o vetor original, com o novo indice 
  };

  //view do componente
  return(
    <div>
      <h1>To-Do-List App</h1>
      <ToDoForm addTarefa={addTarefa}/>
      <ToDoList tarefas={tarefas} removerTarefa={removerTarefa}/>
    </div>
  );

}

export default App;
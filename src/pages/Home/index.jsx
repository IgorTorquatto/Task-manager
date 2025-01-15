import { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  // Função para buscar tarefas do usuário
  const fetchTasks = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.get(`http://localhost:3000/tasks/${userId}`);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  // Chamar fetchTasks ao carregar a página
  useEffect(() => {
    fetchTasks();
  }, []);

  // Função para criar uma nova tarefa
  const handleCreateTask = async () => {
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.post("http://localhost:3000/tasks", {
        user_id: userId,
        title: newTask.title,
        description: newTask.description,
      });

      if (response.status === 201) {
        setNewTask({ title: "", description: "" }); // Limpar os campos do formulário
        fetchTasks(); // Atualizar a lista de tarefas
      }
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      
      {/* Formulário para criar uma nova tarefa */}
      <div>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrição da tarefa"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button onClick={handleCreateTask}>Criar Tarefa</button>
      </div>

      {/* Lista de tarefas */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>: {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

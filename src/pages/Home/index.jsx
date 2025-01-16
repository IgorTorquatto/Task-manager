import { useState, useEffect } from "react";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Card, CardBody, CardHeader, Container } from "./styles.js";
import { Link } from "react-router-dom";

export const Home = () => {
  const [tasks, setTasks] = useState([]);

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

  return (
    <Container>
      <Card>
        <CardHeader>
          <p>Quantidade: {tasks.length}</p>
          <h1>Minhas tarefas</h1>
        </CardHeader>
        <CardBody>
          <ListGroup as="ol" numbered>
            {tasks.map((task) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-3"
                key={task.id}
              >
                <div className="ms-2 me-auto customBox">
                  <div className="fw-bold">{task.title}</div>
                 {task.description}
                </div>
                <div className="badgeIcon">
                  <Badge bg="primary" pill>
                    {task.status}
                  </Badge>
                  <i className="fas fa-pen-to-square"></i>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Link className="btn btn-primary customBtn" to="/register_task">
            Cadastrar Tarefa
          </Link>
        </CardBody>
      </Card>
    </Container>
  );
};

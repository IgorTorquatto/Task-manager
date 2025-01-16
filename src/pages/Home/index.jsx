import { useState, useEffect } from "react";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Card, CardBody, CardHeader, Container } from "./styles.js";
import { Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();

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

  // Função para excluir uma tarefa
  const handleDeleteTask = async (taskId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/tasks/${taskId}`
      );

      if (response.status === 200) {
        setTasks(tasks.filter((task) => task.id !== taskId));
        setShowModal(false);
        toast.success("Tarefa excluída com sucesso!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
        });
      }
    } catch (error) {
      toast.error("Erro ao excluir tarefa. Por favor, tente novamente.", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        theme: "colored"
      });
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  // Abrir a modal e armazenar a tarefa selecionada
  const handleOpenModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  // Fechar a modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };

  // Chamar fetchTasks ao carregar a página
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container>
      <ToastContainer/>
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
                  <i
                    className="fas fa-pen-to-square"
                    onClick={() => handleOpenModal(task)}
                  ></i>
                  {selectedTask && (
                    <Modal show={showModal} onHide={handleCloseModal} centered>
                      <Modal.Header closeButton>
                        <Modal.Title>Opções para a Tarefa</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>
                          O que você deseja fazer com a tarefa{" "}
                          <strong>{selectedTask.title}</strong>?
                        </p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                          Cancelar
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteTask(selectedTask.id)}
                        >
                          Excluir
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => {
                            handleCloseModal();
                            // Redireciona para a página de edição
                            // window.location.href = `/edit/${selectedTask.id}`;
                            navigate(`/update_task/${selectedTask.id}`);
                          }}
                        >
                          Atualizar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  )}
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

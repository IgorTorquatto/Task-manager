import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card, CardBody, CardHeader, Container } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const RegisterTask = () => {
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  // Função para criar uma nova tarefa
  const handleCreateTask = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.post("http://localhost:3000/tasks", {
        user_id: userId,
        title: newTask.title,
        description: newTask.description,
      });

      if (response.status === 201) {
        setNewTask({ title: "", description: "" }); // Limpar os campos do formulário
        toast.success("Usuário cadastrado com sucesso!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
        });

        setTimeout(()=>{
            navigate("/home");
        },2000);
      }
    } catch (error) {
        toast.error("Erro ao cadastrar usuário. Preencha todos os campos.", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            theme: "colored"
          });
      console.error("Erro ao criar tarefa:", error);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Card>
        <CardHeader>
          <h1>Cadastrar Tarefa</h1>
        </CardHeader>
        <CardBody>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) =>
                  setNewTask({ ...newTask, description: e.target.value })
                }
              />
            </Form.Group>
            <button
              onClick={handleCreateTask}
              className="btn btn-primary customBtn"
            >
              Cadastrar
            </button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card, CardBody, CardHeader, Container } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate,useParams } from "react-router-dom";

export const UpdateTask = () => {
  const [updateTask, setUpdateTask] = useState({ title: "", description: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  // Função para atualizar uma tarefa
  const handleUpdateTask = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.put(`http://localhost:3000/tasks/${id}`, {
        user_id: userId,
        title: updateTask.title,
        description: updateTask.description,
      });

      if (response.status === 200) {
        setUpdateTask({ title: "", description: "" }); // Limpar os campos do formulário
        toast.success("Tarefa atualizada com sucesso!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
        });

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }
    } catch (error) {
      toast.error(
        "Erro ao atualizar tarefa.",
        {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          theme: "colored",
        }
      );
      console.error("Erro ao criar tarefa:", error);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Card>
        <CardHeader>
          <h1>Atualizar Tarefa</h1>
        </CardHeader>
        <CardBody>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) =>
                  setUpdateTask({ ...updateTask, title: e.target.value })
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
                  setUpdateTask({ ...updateTask, description: e.target.value })
                }
              />
            </Form.Group>
            <button
              onClick={handleUpdateTask}
              className="btn btn-primary customBtn"
            >
              Atualizar
            </button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

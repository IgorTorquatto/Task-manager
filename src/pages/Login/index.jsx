import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.css";

//schema de validação

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
});

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/login_user", {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        const userId = response.data.user.id;
        localStorage.setItem("userId",userId);
        
        toast.success("Login realizado com sucesso!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
        });

        setTimeout(() => {
          navigate("/home");
        }, 3000);
      }
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        theme: "colored"
      });
      console.error("Erro ao realizar login: ", error);
    }
  };

  return (
    <MDBContainer>
      <ToastContainer />
      <MDBRow
        className={`d-flex justify-content-center align-items-center h-100`}
      >
        <MDBCol col="12">
          <MDBCard className={`my-5 mx-auto ${styles.container}`}>
            <div className={styles.loginHeader}>
              <h2 className="fw-bold text-center">Login</h2>
            </div>
            <MDBCardBody className="p-5 w-100 d-flex flex-column justify-content-start">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <MDBInput
                    wrapperClass="w-100"
                    label="E-mail"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    {...register("email")}
                  />
                  <p className="text-danger">{errors.email?.message}</p>
                </div>
                <div>
                  <MDBInput
                    wrapperClass="w-100"
                    label="Senha"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    {...register("password")}
                  />
                  <p className="text-danger">{errors.password?.message}</p>
                </div>
                <div className={`${styles.divLoginBtn}`}>
                  <MDBBtn className={styles.loginBtn} size="lg" type="submit">
                    Entrar
                  </MDBBtn>
                </div>
              </form>
              <div className={styles.sectionLink}>
                <p className={styles.registerLink}>
                  Não tem uma conta? <Link to="/register">Registrar</Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

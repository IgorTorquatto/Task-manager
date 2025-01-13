import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import styles from "./Register.module.css";

//schema de validação

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().min(6,"A senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref("password"),null],"As senhas devem ser iguais").required("Confirmação de senha é obrigatória")
});

export const Register = () => {

  //
  const navigate = useNavigate();
  const { register, handleSubmit, formState: {errors},} = useForm({resolver: yupResolver(schema)});

  //Função que envia dados para o back-end
  const onSubmit = async (data) =>{
    try{
      const response = await axios.post("http://localhost:3000/create_user",{
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if(response.status === 201){
        navigate("/home");
      }

    }catch(error){
      console.log("Erro ao cadastrar usuário", error);
      alert("Erro ao cadastrar. Por favor, tente novamente.");
    }
  }

  return (
    <MDBContainer>
      <MDBRow
        className={`d-flex justify-content-center align-items-center h-100`}
      >
        <MDBCol col="12">
          <MDBCard className={`my-5 mx-auto ${styles.container}`}>
            <div className={styles.registerHeader}>
              <h2 className="fw-bold text-center">Cadastro</h2>
            </div>
            <MDBCardBody className="p-5 w-100 d-flex flex-column justify-content-start">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <MDBInput
                  wrapperClass="w-100"
                  label="Nome"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  {...register("name")}
                />
                <p className="text-danger">{errors.name?.message}</p>
              </div>
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
              <div>
              <MDBInput
                wrapperClass="w-100"
                label="Confirmar senha"
                id="formControlLg"
                type="password"
                size="lg"
                {...register("confirmPassword")}
              />
              <p className="text-danger">{errors.confirmPassword?.message}</p>
              </div>

              <div className={`${styles.divRegisterBtn}`}>
              <MDBBtn className={styles.registerBtn} size="lg" type="submit">
                Cadastrar
              </MDBBtn>
              </div>
              </form>
              <div className={styles.sectionLink}>
                <p className={styles.registerLink}>
                  Já possui uma conta? <Link to="/">Entrar</Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

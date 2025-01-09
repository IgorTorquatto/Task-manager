import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

export const Register = () => {
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
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Nome"
                id="formControlLg"
                type="text"
                size="lg"
              />
               <MDBInput
                wrapperClass="mb-4 w-100"
                label="E-mail"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Senha"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Confirmar senha"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn className={styles.registerBtn} size="lg">
                Cadastrar
              </MDBBtn>
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

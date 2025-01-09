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
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <MDBContainer>
      <MDBRow
        className={`d-flex justify-content-center align-items-center h-100`}
      >
        <MDBCol col="12">
          <MDBCard className={`my-5 mx-auto ${styles.container}`}>
            <div className={styles.loginHeader}>
              <h2 className="fw-bold text-center">Login</h2>
            </div>
            <MDBCardBody className="p-5 w-100 d-flex flex-column justify-content-start">
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

              <MDBBtn className={styles.loginBtn} size="lg">
                Entrar
              </MDBBtn>
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

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import styles from "./Login.module.css";
import LoginImg from "../../assets/fernando-hernandez-rLkZVjaqW2o-unsplash.jpg";

export const Login = () => {
  return (
    <MDBContainer className={`my-5`}>
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={LoginImg}
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6 d-flex align-items-center">
            <MDBCardBody className="d-flex flex-column align-items-center">
              <div className="d-flex flex-row mt-2 justify-content-center">
                <span className="h1 fw-bold mb-5">Gerenciador de Tarefas</span>
              </div>

              <div className="d-grid col-9">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />
              </div>
              <div className={`d-grid col-7`}>
                <button
                  className={`mb-4 px-5 btn btn-primary p-2`}
                >
                  Login
                </button>
              </div>

              <p className={`mb-5 pb-lg-2`}>
                {" "}
                Não tem uma conta ?{" "}
                <a href="#!" className={`${styles.register}`}>
                  Registre-se aqui
                </a>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
  width: 60%;
  padding: 20px;
  margin-top: 100px;
  background-color: rgba(255, 255, 255, 0.77);
  border-radius: 1rem;
  @media (max-width: 600px) {
    width: 350px;
  }
`;

export const CardHeader = styled.div`
  h1 {
    font-size: 22px;
    opacity: 0.9;
    text-align: center;
    padding: 10px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  Form{
    display: flex;
    flex-direction: column;
  }
  .customBtn{
    text-transform: capitalize;
    width: 150px;
    align-self: center;
  }
`;
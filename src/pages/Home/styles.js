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
  margin-bottom: 100px;
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
  p {
    display: flex;
    justify-content: end;
    margin-bottom: 0;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  .badgeIcon {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;

    i{
     cursor: pointer;
    }

    i:hover{
        opacity: 0.7;
    }
  }
  .customBtn{
    text-transform: capitalize;
    width: 150px;
    align-self: center;
  }
`;

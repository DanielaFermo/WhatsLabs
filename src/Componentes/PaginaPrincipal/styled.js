import styled from "styled-components";

export const Pagina = styled.div`
  * {
    padding: 0;
    margin: 0;
    display: flex;
    box-sizing: border-box;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Chat = styled.div`
  width: 80vw;
  height: 95vh;
  padding:1%;
  border: 1px solid black;
  display: flex;
  overflow: scroll;
  scroll-behavior: smooth;
  align-items:flex-start;
  flex-direction: column;
`;

export const Remetente = styled.form`
  width: 80vw;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 15vw;
  height: 3vh;
`;

export const InputMensagem = styled.input`
  width: 60vw;
  height: 3vh;
`;
export const ButtonEnviar = styled.button`
  text-align: center;
  align-items: center;
`;

export const Nome = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px 8px;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightgray;
  }
`;

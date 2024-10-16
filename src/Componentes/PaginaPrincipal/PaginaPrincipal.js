import { useState } from "react";
import {
  ButtonEnviar,
  Chat,
  Input,
  InputMensagem,
  Main,
  Nome,
  Pagina,
  Remetente,
} from "./styled";

function PaginaPrincipal() {
  const [nome, setNome] = useState("");
  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const [mensagem, setMensagem] = useState("");

  const onChangeMensagem = (event) => {
    setMensagem(event.target.value);
  };

 const [conversa, setConversa] = useState([])


  const adicionaMensagem = (event) => {
    event.preventDefault()
    setConversa([...conversa,
    [<b>{nome}:</b>,
     <p>&nbsp;{mensagem}</p>]])
    setMensagem("")
  };


  return (
    <Pagina>
      <Main>
        <Chat>
           {conversa.map((conversa, indice) => {
           console.log(conversa[0]);
           return (
              <Nome key={indice}>
              {conversa}
              </Nome>
            );
          })} 


        </Chat>
        <Remetente onSubmit={adicionaMensagem}>
          <Input
            placeholder="Digite o seu nome"
            value={nome}
            onChange={onChangeNome}
          />
          <InputMensagem
            placeholder="Mensagem"
            value={mensagem}
            onChange={onChangeMensagem}
          />
          <ButtonEnviar type="submit">Enviar</ButtonEnviar>
        </Remetente>
      </Main>
    </Pagina>
  );
}

export default PaginaPrincipal;
{
  /* <Nome>
<li>
  <b>{nome}&nbsp;: </b>
</li>
<li>&nbsp;{mensagem}</li>
</Nome> */
}

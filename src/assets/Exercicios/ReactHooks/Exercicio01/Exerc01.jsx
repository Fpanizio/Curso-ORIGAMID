import React from "react";
import { GlobalStorage } from "./components/GlobalContext";
import Produtos from "./components/Produtos";
import LimparDados from "./components/LimparDados";

const Exerc01 = () => {
  return (
    <GlobalStorage>
      <h3>Exercicio 01</h3>
      <span>
        {" "}
        Utilize o GlobalContext do exemplo anterior para puxar os dados da API
        abaixo: "https://ranekapi.origamid.dev/json/api/produto/" <br /> Assim
        que o usuário acessar o app coloque os dados da API no contexto global,
        dando acesso aos dados da mesma defina uma função chamada limparDados
        que é responsável por zerar os dados de produto e exponha essa função no
        contexto global
      </span>
      <h2>Produtos:</h2>
      <Produtos />
      <LimparDados />
    </GlobalStorage>
  );
};

export default Exerc01;

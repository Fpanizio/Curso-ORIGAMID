import React, { useState } from "react";
import Produto from "../../components/Aula3/produto";

const Aula3 = () => {
  //Aula 3
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  async function handleClick() {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }
  return (
    <>
      <h3>Aula 3</h3>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        SmartPhone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Tablet
      </button>
      {loading && <p>Carregando...</p>}
      {!loading && dados ? (
        <Produto dados={dados} />
      ) : (
        <p>Nenhum produto selecionado</p>
      )}
      <hr />
    </>
  );
};

export default Aula3;

import React, { useEffect, useState } from "react";
import Produto from "../../components/Aula5/Produto";

const Aula5 = () => {
  const [produto, setProduto] = useState(null);
  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);
  return (
    <>
      <h3>Aula 5</h3>
      <div>
        <h1>Preferencia: {produto}</h1>
        <button onClick={handleClick} style={{ margin: "1rem" }}>
          Notebook
        </button>
        <button onClick={handleClick}>Smartphone</button>
        <Produto produto={produto}/>
      </div>
      <hr />
    </>
  );
};

export default Aula5;

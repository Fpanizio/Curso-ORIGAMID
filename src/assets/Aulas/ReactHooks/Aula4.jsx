import React, { useState, useEffect } from "react";

const Aula4 = () => {
  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <>
      <div>
        <h3>Aula 4</h3>
        {dados && (
          <div>
            <h4>{dados.nome}</h4>
            <p>Preço do notebook: R$ {dados.preco}</p>
            <p>Quantidade da compra: {contar}</p>
            <p>Valor total: R$ {dados.preco * contar}</p>
          </div>
        )}
        <button onClick={() => setContar(contar + 1)}>
          Adicionar no carrinho
        </button>
      </div>
      <hr />
    </>
  );
};

export default Aula4;

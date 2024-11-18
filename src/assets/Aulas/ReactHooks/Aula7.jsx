import React, { useReducer, useRef, useState } from "react";

const Aula7 = () => {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("item adicionado ao carrinho");

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <>
      <h3>Aula 7</h3>
      <button onClick={handleClick}>Adicionar {carrinho}</button>
      <p>{notificacao}</p>
      <hr />
    </>
  );
};

export default Aula7;

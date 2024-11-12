import React from "react";

const ButtonModal = ({ setModal, modal }) => {
  function handleClick() {
    setModal((ativo) => !ativo);
  }
  return (
    <button onClick={handleClick}>
      {!modal ? "Abrir Modal" : "Fechar modal"}
    </button>
  );
};

export default ButtonModal;

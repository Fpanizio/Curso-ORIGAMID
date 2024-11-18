import React, { useState } from "react";
import Modal from "../../components/Aula1/Modal";
import ButtonModal from "../../components/Aula1/ButtonModal";

const Aula1 = () => {
  // Aula 1
  const [modal, setModal] = useState(false);

  return (
    <>
      <div>
        <h3>Aula 1</h3>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} modal={modal} />
      </div>
      <hr />
    </>
  );
};

export default Aula1;

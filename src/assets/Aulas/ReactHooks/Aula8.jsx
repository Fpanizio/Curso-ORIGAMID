import React from "react";
import Produto from "../../components/Aula8/Produto";
import { GlobalStorage } from "../../components/Aula8/GlobalContext";

const Aula8 = () => {
  return (
    <GlobalStorage>
      <h3>Aula 8</h3>
      <Produto />
      <hr />
    </GlobalStorage>
  );
};

export default Aula8;

import React, { useEffect, useState } from "react";
import Aula1 from "./assets/Aulas/aula1";
import Aula2 from "./assets/Aulas/Aula2";
import Aula3 from "./assets/Aulas/Aula3";
import Aula4 from "./assets/Aulas/Aula4";
import Aula5 from "./assets/Aulas/Aula5";
import Aula6 from "./assets/Aulas/Aula6";
import Aula7 from "./assets/Aulas/Aula7";
import Aula8 from "./assets/Aulas/Aula8";
import Exerc01 from "./assets/Exercicios/Exercicio01/Exerc01";

const App = () => {
  return (
    <>
      <Exerc01 />
      <hr />
      <Aula1 />
      <Aula2 />
      <Aula3 />
      <Aula4 />
      <Aula5 />
      <Aula6 />
      <Aula7 />
      <Aula8 />
    </>
  );
};

export default App;

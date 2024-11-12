import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Produtos = () => {
  const {dados} = useContext(GlobalContext);
  // console.log(global);

  if (dados === null) return null;
  return (
    <>
      <div>
        <div>
          {dados.map((item) => (
            <p key={item.id}>{item.nome}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Produtos;

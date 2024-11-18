import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Produtos = () => {
  const { dados } = useContext(GlobalContext);
  // console.log(global);

  if (dados === null) return null;
  return (
    <>
      <div>
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(3 minmax(100px, 1fr)",
            gridTemplateRows: "repeat(3, 100px)",
            alignItems: 'center',
          }}
        >
          {dados.map((item) => (
            <div key={item.id}>
              <p style={{display: "flex", justifyContent: "center"}}>
                {item.nome} - R$ {item.preco}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Produtos;

import React, { useState } from "react";

const Aula2 = () => {
  // Aula 2
  const [items, setItems] = useState(["Item 1"]);
  const [contar, setContar] = useState(1);

  function handleClick() {
    setContar(contar + 1);
    setItems([...items, "Item " + (contar + 1)]);
  }
  return (
    <>
      <h3>Aula 2</h3>
      <div style={{ display: "flex" }}>
        <div>
          <button onClick={handleClick}>{contar}</button>
        </div>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Aula2;

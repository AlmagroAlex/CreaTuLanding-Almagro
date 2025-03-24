import React from "react";

const ItemListContainer = ({ greeting }) => {
  const products = ["Producto 1", "Producto 2", "Producto 3"];

  return (
    <div>
      <h2>{greeting}</h2>
      <ul style={{ textAlign: "center" }}>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;

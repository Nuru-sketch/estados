import React, { useState } from "react";
import PropTypes from "prop-types";
import "./boxestilo.css";

const Productos = (props) => {
  const [compra, setCompra] = useState(props.stockinicial);
  const comprar = () => {
    setCompra(compra - 1);
  };
  const { nombre, precio, descripcion, stock } = props;
  const stockStyle = {
    color: compra > 0 ? "green" : "red",
  };
  return (
    <div id="mainbox" style={{}}>
      <h1>{nombre}</h1>
      <p>{precio}</p>
      <h4>{descripcion}</h4>
      <h2 id="stock" style={stockStyle}>
        {compra > 0 ? `${compra} Disponible` : "Agotado"}
      </h2>
      <button onClick={comprar} disabled={compra <= 0} style={{
        backgroundColor:'#51d1f6',
        borderRadius:'6px',
        height:'30px',
        width:'100px'
      }}>
        Comprar
      </button>
    </div>
  );
};

Productos.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
  stockinicial: PropTypes.number.isRequired,
};

export default Productos;

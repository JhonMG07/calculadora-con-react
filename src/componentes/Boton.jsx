import React from "react";
import "../stylesheet/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : null
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}
export default Boton;

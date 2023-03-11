import React from "react";
import "../stylesheet/BotonClear.css";

const BotonClear = (props) => (
  // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div
    className="boton-clear"
    onClick={() => props.manejarClear(props.children)}
  >
    {props.children}
  </div>
);

export default BotonClear;

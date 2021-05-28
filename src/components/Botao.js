import React from "react";

const Botao = (props) => (
    <button onClick={props.onClick} style={{ marginLeft: "10px" }}>
        {props.label}
    </button>
);
export default Botao;

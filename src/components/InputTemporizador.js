import React, { useState } from "react";
import Botao from "./Botao";

const InputTemporizador = (props) => {
    const [tempo, setTempo] = useState("");

    function setTemporizador() {
        if (!tempo) {
            alert("Insira um tempo válido!");
            return;
        }
        if (!props.parar) {
            alert("Temporizador em andamento!");
            return;
        }
        props.setHoras(tempo.substring(0, 2));
        props.setMinutos(tempo.substring(3, 5));
        if (tempo.substring(6, 8) === "") {
            props.setSegundos(0);
            return;
        }
        props.setSegundos(tempo.substring(6, 8));
    }
    return (
        <div>
            <label
                for="inputTemporizador"
                style={{
                    display: "block",
                    marginTop: "10px",
                    marginBottom: "10px",
                }}
            >
                Insira o tempo inicial (horas:minutos):
            </label>
            <input
                id="inputTemporizador"
                type="time"
                step="1"
                min="00:00:00"
                onChange={(valor) => setTempo(valor.target.value)}
            ></input>
            <Botao onClick={setTemporizador} label="Tempo inicial"></Botao>
        </div>
    );
};
export default InputTemporizador;

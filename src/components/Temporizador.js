import React, { useState, useEffect } from "react";
import LabelCronometro from "./LabelCronometro";
import Botao from "./Botao";
/* import LabelParcial from "./LabelParcial"; */
import InputTemporizador from "./InputTemporizador";

const Temporizador = (props) => {
    const [segundos, setSegundos] = useState(10);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [parar, setParar] = useState(true);
    const [nomeParar, setNomeParar] = useState("Iniciar");
    /* const [parcial, setParcial] = useState([]); */

    /* function parciais() {
        const p = `${"0".concat(minutos).slice(-2)} : ${"0"
            .concat(segundos)
            .slice(-2)}`;
        setParcial([...parcial, p]);
    } */
    function formatarTempo(tempo) {
        return "0".concat(tempo).slice(-2);
    }
    function decrementar() {
        setSegundos(segundos - 1);
    }
    function decrementarMinutos() {
        setSegundos(4);
        setMinutos(minutos - 1);
    }
    function decrementarHoras() {
        setMinutos(2);
        setHoras(horas - 1);
    }
    function zerarCronometro() {
        if (!parar) setParar(true);
        setSegundos(0);
        setMinutos(0);
        setHoras(0);
        setNomeParar("Iniciar");
        console.log(segundos);
        /* setParcial([]); */
    }
    function paraTempo() {
        setNomeParar(nomeParar === "Parar" ? "Resumir" : "Parar");
        setParar(!parar);
    }

    function acabarTempo() {
        paraTempo();
        zerarCronometro();
        alert("Acabou o tempo!");
    }
    useEffect(() => {
        if (parar) return;
        if (horas == 0 && minutos == 0 && segundos < 0) {
            acabarTempo();
            return;
        }
        let id = setInterval(decrementar, 1000);
        if (segundos < 0) {
            decrementarMinutos();
        }
        return () => clearInterval(id);
    }, [segundos, parar]);
    useEffect(() => {
        if (minutos < 0) {
            decrementarHoras();
        }
    }, [minutos]);

    return (
        <div
            class="tab-pane fade show active"
            id="temporizador"
            role="tabpanel"
            aria-labelledby="aba-temporizador"
        >
            <LabelCronometro name="👺 Temporizador ⏰" />
            <LabelCronometro
                name={`${formatarTempo(horas)} : ${formatarTempo(
                    minutos
                )} : ${formatarTempo(segundos)}`}
            />
            <Botao onClick={zerarCronometro} label="Zerar" />
            <Botao
                onClick={() => {
                    zerarCronometro();
                    setMinutos(5);
                }}
                label="5 min"
            />
            <Botao
                onClick={() => {
                    zerarCronometro();
                    setMinutos(10);
                }}
                label="10 min"
            />
            <Botao onClick={paraTempo} label={nomeParar} />
            <InputTemporizador
                setHoras={setHoras}
                setMinutos={setMinutos}
                setSegundos={setSegundos}
                parar={parar}
            />
            {/* <LabelParcial items={parcial} /> */}
        </div>
    );
};
export default Temporizador;

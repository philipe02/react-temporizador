import { useEffect, useState } from "react";
import { listaFuzos, detalheFuzo } from "../Requests.js";
import Botao from "./Botao.js";

function FuzoSelect(props) {
    const [fuzos, setFuzos] = useState([]);
    useEffect(() => {
        listaFuzos()
            .then((listaFuzos) => {
                setFuzos(listaFuzos.map((fuzo) => <option value={fuzo.Id} />));
            })
            .catch(console.log);
    }, []);
    return (
        <div>
            <label for="fuzoInput" class="form-label">
                Selecione o fuzo horário
            </label>
            <input
                class="form-control"
                list="listaFuzos"
                id="fuzoInput"
                placeholder="Type to search..."
            />
            <datalist id="listaFuzos">{fuzos}</datalist>
            <Botao onClick={() => console.log(fuzos)} label="Debug" />
        </div>
    );
}

export default FuzoSelect;

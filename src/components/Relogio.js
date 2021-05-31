import LabelCronometro from "./LabelCronometro";
import FuzoSelect from "./FuzoSelect";
import Botao from "./Botao";

function Relogio(props) {
    return (
        <div
            class="tab-pane fade"
            id="relogio"
            role="tabpanel"
            aria-labelledby="aba-relogio"
        >
            <LabelCronometro name="👺 Relógio 🌎" />
            <FuzoSelect />
        </div>
    );
}
export default Relogio;

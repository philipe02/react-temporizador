import Temporizador from "./components/Temporizador";
import Relogio from "./components/Relogio";
import "./App.css";
import LabelCronometro from "./components/LabelCronometro";
import MenuAbas from "./components/MenuAbas";

function App() {
    return (
        <div style={{ textAlign: "center", width: "50%", margin: "auto" }}>
            <MenuAbas />
            <div class="tab-content" id="tabContent">
                <Temporizador />
                <Relogio />
            </div>
        </div>
    );
}

export default App;

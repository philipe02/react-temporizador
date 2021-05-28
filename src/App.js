import Contador from "./components/Contador";
import "./App.css";
import LabelCronometro from "./components/LabelCronometro";

function App() {
    return (
        <div style={{ textAlign: "center", width: "50%", margin: "auto" }}>
            <LabelCronometro name="👺 Temporizador ⏰" />
            <Contador />
        </div>
    );
}

export default App;

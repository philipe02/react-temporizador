import React from "react";
function MenuAbas(props) {
    return (
        <ul class="nav nav-tabs" id="menu-abas" role="tablist">
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link active"
                    id="aba-temporizador"
                    data-bs-toggle="tab"
                    data-bs-target="#temporizador"
                    type="button"
                    role="tab"
                    aria-controls="temporizador"
                    aria-selected="true"
                >
                    Temporizador
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    id="aba-relogio"
                    data-bs-toggle="tab"
                    data-bs-target="#relogio"
                    type="button"
                    role="tab"
                    aria-controls="relogio"
                    aria-selected="false"
                >
                    Relógio
                </button>
            </li>
        </ul>
    );
}
export default MenuAbas;

import fetch from "node-fetch";
const TOKEN = "EYGsnDRwo_zD4MUL2SvrV3Xs2xywHHtK-TwEdUgCw-w";

export function listaFuzos() {
    return new Promise((resolve, reject) => {
        fetch(`https://atlas.microsoft.com/timezone/enumIana/json?subscription-key=${TOKEN}&api-version=1.0
        `)
            .then((response) => response.json())
            .then((data) => {
                let listaFuzo = data.filter((e) => !e.isAlias);
                resolve(listaFuzo);
            })
            .catch(console.log);
    });
}

export function detalheFuzo(fuzoId) {
    return new Promise((resolve, reject) => {
        fetch(
            `https://atlas.microsoft.com/timezone/byId/json?subscription-key=${TOKEN}&api-version=1.0&query=${fuzoId}`
        )
            .then((response) => response.json())
            .then((data) => {
                resolve(data.TimeZones);
            })
            .catch(console.log);
    });
}

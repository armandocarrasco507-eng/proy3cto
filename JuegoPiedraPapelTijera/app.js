let puntosJugador = 0;
let puntosComputadora = 0;

function jugar(jugador) {

    const opciones = ["piedra", "papel", "tijeras"];

    const computadora =
        opciones[Math.floor(Math.random() * opciones.length)];

    const emojis = {
        piedra: "🪨",
        papel: "📄",
        tijeras: "✂️"
    };

    document.getElementById("eleccionJugador").textContent =
        jugador;

    document.getElementById("eleccionComputadora").textContent =
        computadora;

    document.getElementById("jugadorEmoji").textContent =
        emojis[jugador];

    document.getElementById("computadoraEmoji").textContent =
        emojis[computadora];


    let resultado = "";

    if (jugador === computadora) {

        resultado = "🤝 ¡EMPATE!";

    }

    else if (
        (jugador === "piedra" && computadora === "tijeras") ||
        (jugador === "papel" && computadora === "piedra") ||
        (jugador === "tijeras" && computadora === "papel")
    ) {

        resultado = "🏆 ¡GANASTE!";

        puntosJugador++;

    }

    else {

        resultado = "💀 ¡PERDISTE!";

        puntosComputadora++;

    }


    document.getElementById("resultado").textContent =
        resultado;

    document.getElementById("puntosJugador").textContent =
        puntosJugador;

    document.getElementById("puntosComputadora").textContent =
        puntosComputadora;
}


function reiniciar() {

    puntosJugador = 0;
    puntosComputadora = 0;

    document.getElementById("puntosJugador").textContent = "0";

    document.getElementById("puntosComputadora").textContent = "0";

    document.getElementById("eleccionJugador").textContent =
        "Esperando...";

    document.getElementById("eleccionComputadora").textContent =
        "Esperando...";

    document.getElementById("jugadorEmoji").textContent = "❔";

    document.getElementById("computadoraEmoji").textContent = "❔";

    document.getElementById("resultado").textContent =
        "¡HAZ TU ELECCIÓN!";
}
// ==========================================
// 🕹️ CONTROL DE PANTALLAS ARCADE
// ==========================================

function mostrarJuego() {

    const menu = document.getElementById("menu-screen");
    const juego = document.getElementById("game-screen");
    const creditos = document.getElementById("credits-screen");

    // Ocultar créditos
    creditos.style.display = "none";

    // Preparar el juego
    juego.style.display = "block";

    // Animación de entrada
    juego.classList.remove("game-enter");

    void juego.offsetWidth;

    juego.classList.add("game-enter");


    // Animación de salida del menú
    menu.classList.add("menu-exit");

    setTimeout(() => {

        menu.style.display = "none";
        menu.classList.remove("menu-exit");

    }, 600);
}


function mostrarCreditos() {

    const menu = document.getElementById("menu-screen");
    const creditos = document.getElementById("credits-screen");
    const juego = document.getElementById("game-screen");

    juego.style.display = "none";

    creditos.style.display = "flex";

    creditos.classList.remove("screen-enter");

    void creditos.offsetWidth;

    creditos.classList.add("screen-enter");

    menu.classList.add("menu-exit");

    setTimeout(() => {

        menu.style.display = "none";
        menu.classList.remove("menu-exit");

    }, 600);
}


function volverMenu() {

    const menu = document.getElementById("menu-screen");
    const creditos = document.getElementById("credits-screen");
    const juego = document.getElementById("game-screen");

    juego.style.display = "none";

    creditos.style.display = "none";

    menu.style.display = "flex";

    menu.classList.remove("menu-enter");

    void menu.offsetWidth;

    menu.classList.add("menu-enter");
}
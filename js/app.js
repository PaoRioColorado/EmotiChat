// ============================================================================
// EmotiChat v2.2
// app.js
// Funciones generales de la interfaz
// ============================================================================

function scrollToModule() {

    const panel =
        document.querySelector("#panel-modulo") ||
        document.querySelector(".module-panel");

    if (!panel) return;

    const y =
        panel.getBoundingClientRect().top +
        window.pageYOffset -
        18;

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });

}

function esperarYScroll() {

    setTimeout(scrollToModule, 650);

}

window.EmotiChat = window.EmotiChat || {};

window.EmotiChat.scrollModulo = esperarYScroll;

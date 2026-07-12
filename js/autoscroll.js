// ============================================================================
// EmotiChat v2.2
// Autoscroll del chat
// ============================================================================

function bajarChat() {

    const area = document.querySelector("#chat_area");

    if (!area) return;

    area.scrollTop = area.scrollHeight;

    const internos = area.querySelectorAll("*");

    internos.forEach((el) => {

        const estilo = window.getComputedStyle(el);

        if (
            (estilo.overflowY === "auto" ||
             estilo.overflowY === "scroll") &&
            el.scrollHeight > el.clientHeight
        ) {
            el.scrollTop = el.scrollHeight;
        }

    });

}

function bajarVariasVeces() {

    bajarChat();

    setTimeout(bajarChat, 80);
    setTimeout(bajarChat, 220);
    setTimeout(bajarChat, 500);

}

const observer = new MutationObserver(() => {

    bajarVariasVeces();

});

observer.observe(document.body, {

    childList: true,
    subtree: true,
    characterData: true

});

window.addEventListener("resize", bajarVariasVeces);

window.addEventListener("load", bajarVariasVeces);

setTimeout(bajarVariasVeces, 300);

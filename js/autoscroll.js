() => {
    const bajarChat = () => {
        const area = document.querySelector("#chat_area");

        if (!area) return;

        const candidatos = [
            area,
            ...area.querySelectorAll("*")
        ];

        let contenedor = area;

        for (const elemento of candidatos) {
            const estilo = window.getComputedStyle(elemento);

            if (
                (estilo.overflowY === "auto" ||
                 estilo.overflowY === "scroll") &&
                elemento.scrollHeight > elemento.clientHeight + 2
            ) {
                contenedor = elemento;
                break;
            }
        }

        requestAnimationFrame(() => {
            contenedor.scrollTop = contenedor.scrollHeight;
        });
    };

    const bajarVariasVeces = () => {
        bajarChat();
        setTimeout(bajarChat, 80);
        setTimeout(bajarChat, 220);
        setTimeout(bajarChat, 500);
    };

    const observer = new MutationObserver(() => {
        bajarVariasVeces();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });

    window.addEventListener("resize", bajarVariasVeces);

    bajarVariasVeces();

    return [];
}

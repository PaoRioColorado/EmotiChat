() => {
    setTimeout(() => {
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
    }, 650);

    return [];
}

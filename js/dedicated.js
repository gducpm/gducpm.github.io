document.addEventListener("DOMContentLoaded", () => {
    const scontext = document.getElementById("context");
    function selectContextChange() {
        document.querySelectorAll("div[id^='context-']").forEach(div => {
            div.classList.add("d-none");
        });
        const selectedId = `context-${scontext.value}`;
        const target = document.getElementById(selectedId);
        if (target) target.classList.remove("d-none");
    }
    selectContextChange();
    scontext.addEventListener("change", selectContextChange);
});
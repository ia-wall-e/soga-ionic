const container = document.getElementById("mod-form");
async function inset() {
    const form = await fetch('../../components-complex/form/form.html');
    if (!form.ok) throw new Error('Error al cargar el contenido');
    const t = await form.text();
    container.innerHTML=t;


}
window.onload = inset;
async function cargarContenido() {
    try {
        // Usamos la API Fetch para obtener el contenido del archivo HTML
        const header = await fetch('../../components-complex/header/header.html');
        if (!header.ok) {
            throw new Error('Error al cargar el contenido');
        }
        const mod = await fetch('../../components-complex/search/search.html');
        if (!mod.ok) {
            throw new Error('Error al cargar el contenido');
        }
        const mod1 = await fetch('../../components-complex/modulos/md-card-light.html');
        if (!mod1.ok) {
            throw new Error('Error al cargar el contenido');
        }
        const mod2 = await fetch('../../components-complex/modulos/md-card-light.html');
        if (!mod2.ok) {
            throw new Error('Error al cargar el contenido');
        }
        const mod3 = await fetch('../../components-complex/modulos/md-card-mini.html');
        if (!mod3.ok) {
            throw new Error('Error al cargar el contenido');
        }
        const mod4 = await fetch('../../components-complex/modulos/md-card-light.html');
        if (!mod4.ok) {
            throw new Error('Error al cargar el contenido');
        }
        // Insertamos el contenido en el elemento con id "contenido-externo"
        const header_ = await header.text();
        const search = await mod.text();
        const contenido = await mod1.text();
        const contenido2 = await mod2.text();
        const contenido3 = await mod3.text();
        const contenido4 = await mod4.text();
        // document.getElementById('header').innerHTML = header_;
        // document.getElementById('search').innerHTML = search;
        document.getElementById('ctn_1').innerHTML = contenido;
        document.getElementById('ctn_2').innerHTML = contenido2;
        document.getElementById('ctn_3').innerHTML = contenido3;
        document.getElementById('ctn_4').innerHTML = contenido4;
    } catch (error) {
        console.error('Error:', error);
    }
}
window.onload = cargarContenido;

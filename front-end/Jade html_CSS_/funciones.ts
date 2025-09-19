// Función para cargar contenido dinámico
export function cargarContenido(pagina: string): void {
    fetch(pagina)
        .then(response => response.text())
        .then(data => {
            const contenedor = document.getElementById("contenido");
            if (contenedor) contenedor.innerHTML = data;
        })
        .catch(() => {
            const contenedor = document.getElementById("contenido");
            if (contenedor) contenedor.innerHTML = "<p>Error al cargar el contenido</p>";
        });
}

// Función para cargar fecha actual en un input
export function cargarFechaActual(idCampo: string): void {
    const hoy = new Date();
    const fechaFormateada = hoy.toISOString().split('T')[0];
    const campo = document.getElementById(idCampo) as HTMLInputElement | null;
    if (campo) campo.value = fechaFormateada;
}

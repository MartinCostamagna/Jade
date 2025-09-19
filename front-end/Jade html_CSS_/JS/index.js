function cargarContenido(pagina) {
  fetch(pagina)
    .then(response => response.text())
    .then(data => {
      document.getElementById("contenido").innerHTML = data;
      const fechaInput = document.getElementById("fechaVenta");
        if (fechaInput) {
            const hoy = new Date();
            fechaInput.value = hoy.toISOString().split('T')[0];
        }
    })
      
    .catch(error => {
      document.getElementById("contenido").innerHTML = "<p>Error al cargar el contenido</p>";
    });
}

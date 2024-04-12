document.addEventListener("DOMContentLoaded", function() {
  // Obtener el parámetro de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const imagenIndex = urlParams.get('imagen');

  // Leer el archivo JSON
  fetch('/Tienda.json')
      .then(response => response.json())
      .then(data => {
          // Función para mostrar los datos de la imagen seleccionada
          function mostrarDatos(indice) {
              // Obtener el conjunto de datos correspondiente al índice seleccionado
              const datosImagen = data[indice];

              // Mostrar los datos en el HTML
              document.getElementById('nombre').textContent = datosImagen.nombre;
              document.getElementById('edad').textContent = datosImagen.edad;
              document.getElementById('ciudad').textContent = datosImagen.ciudad;

              // Cambiar la imagen mostrada
              const imagenMostradaElement = document.getElementById('imagenMostrada');
              if (datosImagen.imagen) {
                  // Si la imagen existe en el objeto de datos, asignarla
                  imagenMostradaElement.src = datosImagen.imagen;
              } else {
                  console.error('No se encontró ninguna ruta de imagen en el objeto de datos.');
              }
          }

          // Mostrar los datos de la imagen seleccionada por defecto
          mostrarDatos(imagenIndex);
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

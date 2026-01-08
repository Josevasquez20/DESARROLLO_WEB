// Referencias a elementos del DOM
const inputUrl = document.getElementById("imgUrl");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const galeria = document.getElementById("galeria");

let imagenSeleccionada = null;

// --- Agregar Imagen ---
btnAgregar.addEventListener("click", () => {
  const url = inputUrl.value.trim();
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Imagen";
    
    // Evento para seleccionar imagen
    img.addEventListener("click", () => {
      if (imagenSeleccionada) {
        imagenSeleccionada.classList.remove("seleccionada");
      }
      imagenSeleccionada = img;
      img.classList.add("seleccionada");
    });

    galeria.appendChild(img);
    inputUrl.value = ""; // limpiar campo
  }
});

// --- Eliminar Imagen Seleccionada ---
btnEliminar.addEventListener("click", () => {
  if (imagenSeleccionada) {
    galeria.removeChild(imagenSeleccionada);
    imagenSeleccionada = null;
  }
});

// --- Atajos de teclado ---
// Enter = agregar imagen
// Delete = eliminar imagen seleccionada
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btnAgregar.click();
  }
  if (event.key === "Delete") {
    btnEliminar.click();
  }
});

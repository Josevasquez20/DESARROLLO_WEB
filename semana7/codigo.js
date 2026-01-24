//  Arreglo inicial de productos
let productos = [
  { nombre: "Mesa", precio: 120, descripcion: "Madera sólida" },
  { nombre: "Silla", precio: 60, descripcion: "Cómoda y ligera" },
  { nombre: "Lámpara", precio: 40, descripcion: "Luz cálida" }
];

//  Función que muestra los productos en la lista
function mostrarProductos() {
  let lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // Limpia antes de renderizar

  //  Usamos un for normal
  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];
    let item = document.createElement("li");

    // Mostramos nombre, precio y descripción por separado
    item.innerHTML = `
      <p><strong>Nombre:</strong> ${p.nombre}</p>
      <p><strong>Precio:</strong> $${p.precio}</p>
      <p><strong>Descripción:</strong> ${p.descripcion}</p>
    `;

    lista.appendChild(item);
  }
}

//  Renderiza al cargar
mostrarProductos();

//  Evento del botón
document.getElementById("btn-agregar").addEventListener("click", () => {
  productos.push({ nombre: "Nuevo producto", precio: 200, descripcion: "Producto agregado" });
  mostrarProductos();
});

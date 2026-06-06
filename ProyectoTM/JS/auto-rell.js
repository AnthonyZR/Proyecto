const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");
const producto = productos.find(p => p.id === id);
document.getElementById("nombre-producto").textContent =
producto.nombre;
document.getElementById("precio-producto").textContent =
`S/${producto.precio}`;
document.getElementById("categoria-producto").textContent =
producto.categoria;
document.getElementById("descripcion-producto").textContent =
producto.descripcion;
document.getElementById("imagen-principal").src =
producto.imagen;
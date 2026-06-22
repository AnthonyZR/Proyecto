
    /*          NO TOQUEN NADA          */

const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");
const producto = productos.find(p => p.id === id); 
const paginasCategorias = {
    Sala: "../HTML/02-sala.html",
    Dormitorio: "../HTML/03-dormitorio.html",
    Oficina: "../HTML/04-oficina.html",
    Comedor: "../HTML/05-comedor.html",
    Baño: "../HTML/06-baño.html",
    Decoración: "../HTML/07-decoracion.html",
    Iluminación: "../HTML/08-iluminacion.html",
    Almacenamiento: "../HTML/09-almacenamiento.html",
    Exterior: "../HTML/10-exterior.html"
};

const relacionados = productos
.filter(p => p.categoria === producto.categoria && p.id !== producto.id)
.slice(0, 3);
const contenedorRelacionados = document.getElementById("productos-relacionados");
relacionados.forEach(relacionado => {
    contenedorRelacionados.innerHTML += `
        <div class="col-md-4">
            <div class="card h-100 shadow-sm">
                <img src="${relacionado.imagen}" class="card-img-top object-fit-cover" style="height: 220px;"  alt="${relacionado.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${relacionado.nombre}</h5>
                    <p class="fw-bold text-dark mb-3">
                        S/${relacionado.precio}
                    </p>
                    <a href="11-productos.html?id=${relacionado.id}"
                       class="btn btn-dark mt-auto">
                        Ver producto
                    </a>
                </div>
            </div>
        </div>
    `;
});
document.getElementById("breadcrumb-categoria").textContent = producto.categoria;
document.getElementById("breadcrumb-categoria").href = paginasCategorias[producto.categoria];
document.getElementById("nombre-producto").textContent = producto.nombre;
document.getElementById("precio-producto").textContent = `S/${producto.precio}`;
document.getElementById("categoria-producto").textContent = producto.categoria;
document.getElementById("descripcion-producto").textContent = producto.descripcion;
document.getElementById("imagen-principal").src = producto.imagen;
document.getElementById("breadcrumb-producto").textContent = producto.nombre;
document.getElementById("material-producto").textContent = producto.material;
document.getElementById("color-producto").textContent = producto.color;
document.getElementById("dimensiones-producto").textContent = producto.dimensiones;
document.getElementById("ver-todos-categoria").href = paginasCategorias[producto.categoria];
document.addEventListener("DOMContentLoaded", () => {
    /* Captura los parámetros de la URL*/
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    if (!id) {
        console.error("No se detectó un ID de producto en la URL.");
        return;
    }

    /*Busca el producto en el array de productos*/
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        console.error("Producto no encontrado con el ID especificado: " + id);
        return;
    }

    // Tus rutas originales para que no se rompa ninguna navegación
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

    /*Rellena la información principal en el HTML respetando tus IDs exactos*/
    if (document.getElementById("imagen-principal")) document.getElementById("imagen-principal").src = producto.imagen;
    if (document.getElementById("nombre-producto")) document.getElementById("nombre-producto").textContent = producto.nombre;
    if (document.getElementById("categoria-producto")) document.getElementById("categoria-producto").textContent = producto.categoria;
    if (document.getElementById("precio-producto")) document.getElementById("precio-producto").textContent = `S/${producto.precio}`;
    if (document.getElementById("descripcion-producto")) document.getElementById("descripcion-producto").textContent = producto.descripcion;
    
    /*Ficha técnica (Características)*/
    if (document.getElementById("material-producto")) document.getElementById("material-producto").textContent = producto.material;
    if (document.getElementById("color-producto")) document.getElementById("color-producto").textContent = producto.color;
    if (document.getElementById("dimensiones-producto")) document.getElementById("dimensiones-producto").textContent = producto.dimensiones;

    /*enlaces dinámicos*/
    if (document.getElementById("breadcrumb-categoria")) {
        document.getElementById("breadcrumb-categoria").textContent = producto.categoria;
        document.getElementById("breadcrumb-categoria").href = paginasCategorias[producto.categoria] || "#";
    }
    if (document.getElementById("breadcrumb-producto")) document.getElementById("breadcrumb-producto").textContent = producto.nombre;
    if (document.getElementById("ver-todos-categoria")) document.getElementById("ver-todos-categoria").href = paginasCategorias[producto.categoria] || "#";

    /*Sección de Productos Relacionados*/
    const relacionados = productos
        .filter(p => p.categoria === producto.categoria && p.id !== producto.id)
        .slice(0, 3);

    const contenedorRelacionados = document.getElementById("productos-relacionados");
    
    if (contenedorRelacionados) {
        contenedorRelacionados.innerHTML = "";
        
        relacionados.forEach(relacionado => {
            contenedorRelacionados.innerHTML += `
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm border-0">
                        <img src="${relacionado.imagen}" class="card-img-top object-fit-cover" style="height: 220px;" alt="${relacionado.nombre}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold">${relacionado.nombre}</h5>
                            <p class="fw-bold text-success mb-3">
                                S/${relacionado.precio}
                            </p>
                            <a href="11-productos.html?id=${relacionado.id}" class="btn btn-dark mt-auto">
                                Ver producto
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
});
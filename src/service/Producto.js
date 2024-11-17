// GET: Obtener todos los productos
async function fetchProductos() {
    try {
        const response = await fetch("http://localhost:8080/producto/getProductos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Productos obtenidos:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

// POST: Crear un nuevo producto
async function crearProducto(producto) {
    try {
        const response = await fetch("http://localhost:8080/producto/crearProducto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Producto creado:", data);
        return data;
    } catch (error) {
        console.error("Error al crear producto:", error);
    }
}

// PUT: Actualizar un producto por ID
async function actualizarProducto(id, producto) {
    try {
        const response = await fetch(`http://localhost:8080/producto/${id}/actualizarProducto`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Producto actualizado:", data);
        return data;
    } catch (error) {
        console.error("Error al actualizar producto:", error);
    }
}

// DELETE: Eliminar un producto por ID
async function eliminarProducto(id) {
    try {
        const response = await fetch(`http://localhost:8080/producto/${id}/eliminarProducto`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        console.log(`Producto con ID ${id} eliminado.`);
    } catch (error) {
        console.error("Error al eliminar producto:", error);
    }
}

// Exportar las funciones
module.exports = {
    fetchProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
};

export async function fetchProductos() {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqZXJvMjAwNSIsImlhdCI6MTczMTgxMzY5MywiZXhwIjoxNzMxODE1MTMzfQ.ZPvsLJ6EaaQUGGTAdhT15YpSRb6l6QWEae42jxjr3Tk';
    try {
        const response = await fetch("http://localhost:8080/producto/getProductos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` // Incluye el token si es necesario
            },
            credentials: 'include' // Esto es opcional y depende de tus necesidades
        });

        if (!response.ok) {
            const errorText = await response.text(); // Captura el texto del error
            throw new Error(`Error: ${response.status} - ${response.statusText}. Detalles: ${errorText}`);
        }

        const data = await response.json();
        console.log("Productos obtenidos:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}

// POST: Crear un nuevo producto
export async function crearProducto(producto) {
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
export async function actualizarProducto(id, producto) {
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
export async function eliminarProducto(id) {
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

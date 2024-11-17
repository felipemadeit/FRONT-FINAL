// GET: Obtener todos los proveedores
async function fetchProveedores() {
    try {
        const response = await fetch("http://localhost:8080/proveedor/getProveedores", {
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
        console.log("Proveedores obtenidos:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener proveedores:", error);
    }
}

// GET: Obtener un proveedor por ID
async function fetchProveedorById(id) {
    try {
        const response = await fetch(`http://localhost:8080/proveedor/${id}`, {
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
        console.log(`Proveedor con ID ${id} obtenido:`, data);
        return data;
    } catch (error) {
        console.error(`Error al obtener proveedor con ID ${id}:`, error);
    }
}

// POST: Crear un nuevo proveedor
async function crearProveedor(proveedor) {
    try {
        const response = await fetch("http://localhost:8080/proveedor/crearProveedor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(proveedor),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Proveedor creado:", data);
        return data;
    } catch (error) {
        console.error("Error al crear proveedor:", error);
    }
}

// PUT: Actualizar un proveedor por ID
async function actualizarProveedor(id, proveedor) {
    try {
        const response = await fetch(`http://localhost:8080/proveedor/${id}/actualizarProveedor`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(proveedor),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log(`Proveedor con ID ${id} actualizado:`, data);
        return data;
    } catch (error) {
        console.error(`Error al actualizar proveedor con ID ${id}:`, error);
    }
}

// DELETE: Eliminar un proveedor por ID
async function eliminarProveedor(id) {
    try {
        const response = await fetch(`http://localhost:8080/proveedor/${id}/eliminarProveedor`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        console.log(`Proveedor con ID ${id} eliminado.`);
    } catch (error) {
        console.error(`Error al eliminar proveedor con ID ${id}:`, error);
    }
}

// Exportar las funciones
module.exports = {
    fetchProveedores,
    fetchProveedorById,
    crearProveedor,
    actualizarProveedor,
    eliminarProveedor,
};

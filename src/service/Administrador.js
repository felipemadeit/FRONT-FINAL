// GET: Obtener todos los administradores
async function fetchAdministradores() {
    try {
        const response = await fetch("http://localhost:8080/administrador/getAdministradores", {
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
        console.log("Administradores obtenidos:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener administradores:", error);
    }
}

// GET: Obtener un administrador por ID
async function fetchAdministradorById(id) {
    try {
        const response = await fetch(`http://localhost:8080/administrador/${id}`, {
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
        console.log(`Administrador con ID ${id} obtenido:`, data);
        return data;
    } catch (error) {
        console.error(`Error al obtener administrador con ID ${id}:`, error);
    }
}

// POST: Crear un nuevo administrador
async function crearAdministrador(admin) {
    try {
        const response = await fetch("http://localhost:8080/administrador/crearAdministrador", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(admin),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Administrador creado:", data);
        return data;
    } catch (error) {
        console.error("Error al crear administrador:", error);
    }
}

// PUT: Actualizar un administrador por ID
async function actualizarAdministrador(id, admin) {
    try {
        const response = await fetch(`http://localhost:8080/administrador/${id}/actualizarAdministrador`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(admin),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log(`Administrador con ID ${id} actualizado:`, data);
        return data;
    } catch (error) {
        console.error(`Error al actualizar administrador con ID ${id}:`, error);
    }
}

// DELETE: Eliminar un administrador por ID
async function eliminarAdministrador(id) {
    try {
        const response = await fetch(`http://localhost:8080/administrador/${id}/eliminarAdministrador`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        console.log(`Administrador con ID ${id} eliminado.`);
    } catch (error) {
        console.error(`Error al eliminar administrador con ID ${id}:`, error);
    }
}

// Exportar las funciones
module.exports = {
    fetchAdministradores,
    fetchAdministradorById,
    crearAdministrador,
    actualizarAdministrador,
    eliminarAdministrador,
};

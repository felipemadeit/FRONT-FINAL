// GET: Obtener todos los usuarios
async function fetchUsuarios() {
    try {
        const response = await fetch("http://localhost:8080/user/getUsuarios", {
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
        console.log("Usuarios obtenidos:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
}

// GET: Obtener un usuario por ID
async function fetchUsuarioById(id) {
    try {
        const response = await fetch(`http://localhost:8080/user/${id}`, {
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
        console.log(`Usuario con ID ${id} obtenido:`, data);
        return data;
    } catch (error) {
        console.error(`Error al obtener usuario con ID ${id}:`, error);
    }
}

// POST: Crear un nuevo usuario
async function crearUsuario(usuario) {
    try {
        const response = await fetch("http://localhost:8080/user/crearUsuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Usuario creado:", data);
        return data;
    } catch (error) {
        console.error("Error al crear usuario:", error);
    }
}

// PUT: Actualizar un usuario por ID
async function actualizarUsuario(id, usuario) {
    try {
        const response = await fetch(`http://localhost:8080/user/${id}/actualizarUsuario`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log(`Usuario con ID ${id} actualizado:`, data);
        return data;
    } catch (error) {
        console.error(`Error al actualizar usuario con ID ${id}:`, error);
    }
}

// DELETE: Eliminar un usuario por ID
async function eliminarUsuario(id) {
    try {
        const response = await fetch(`http://localhost:8080/user/${id}/eliminarUsuario`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        console.log(`Usuario con ID ${id} eliminado.`);
    } catch (error) {
        console.error(`Error al eliminar usuario con ID ${id}:`, error);
    }
}

// Obtener el primer reporte (facturas con productos)
async function obtenerPrimerReporte() {
    try {
        const response = await fetch("http://localhost:8080/user/primerReporte/facturas-productos", {
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
        console.log("Primer reporte (facturas con productos):", data);
        return data;
    } catch (error) {
        console.error("Error al obtener el primer reporte:", error);
    }
}

// Exportar las funciones
module.exports = {
    fetchUsuarios,
    fetchUsuarioById,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    obtenerPrimerReporte,
};

// GET: Obtener todas las sedes
async function fetchSedes() {
    try {
        const response = await fetch("http://localhost:8080/sede/getSedes", {
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
        console.log("Sedes obtenidas:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener sedes:", error);
    }
}

// GET: Obtener una sede por ID
async function fetchSedeById(id) {
    try {
        const response = await fetch(`http://localhost:8080/sede/${id}`, {
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
        console.log(`Sede con ID ${id} obtenida:`, data);
        return data;
    } catch (error) {
        console.error(`Error al obtener sede con ID ${id}:`, error);
    }
}

// POST: Crear una nueva sede
async function crearSede(sede) {
    try {
        const response = await fetch("http://localhost:8080/sede/crearSede", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sede),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Sede creada:", data);
        return data;
    } catch (error) {
        console.error("Error al crear sede:", error);
    }
}

// PUT: Actualizar una sede por ID
async function actualizarSede(id, sede) {
    try {
        const response = await fetch(`http://localhost:8080/sede/${id}/actualizarSede`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sede),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log(`Sede con ID ${id} actualizada:`, data);
        return data;
    } catch (error) {
        console.error(`Error al actualizar sede con ID ${id}:`, error);
    }
}

// DELETE: Eliminar una sede por ID
async function eliminarSede(id) {
    try {
        const response = await fetch(`http://localhost:8080/sede/${id}/eliminarSede`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        console.log(`Sede con ID ${id} eliminada.`);
    } catch (error) {
        console.error(`Error al eliminar sede con ID ${id}:`, error);
    }
}

// Exportar las funciones
module.exports = {
    fetchSedes,
    fetchSedeById,
    crearSede,
    actualizarSede,
    eliminarSede,
};

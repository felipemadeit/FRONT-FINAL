// GET: Obtener todos los lotes
async function fetchLotes() {
    try {
        const response = await fetch("http://localhost:8080/lote/getLotes", {
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
        console.log("Lotes obtenidos:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener lotes:", error);
    }
}

// GET: Obtener un lote por ID
async function fetchLoteById(id) {
    try {
        const response = await fetch(`http://localhost:8080/lote/${id}`, {
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
        console.log(`Lote con ID ${id} obtenido:`, data);
        return data;
    } catch (error) {
        console.error(`Error al obtener lote con ID ${id}:`, error);
    }
}

// POST: Crear un nuevo lote
async function crearLote(lote) {
    try {
        const response = await fetch("http://localhost:8080/lote/crearLote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(lote),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Lote creado:", data);
        return data;
    } catch (error) {
        console.error("Error al crear lote:", error);
    }
}

// PUT: Actualizar un lote por ID
async function actualizarLote(id, lote) {
    try {
        const response = await fetch(`http://localhost:8080/lote/${id}/actualizarLote`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(lote),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log(`Lote con ID ${id} actualizado:`, data);
        return data;
    } catch (error) {
        console.error(`Error al actualizar lote con ID ${id}:`, error);
    }
}

// DELETE: Eliminar un lote por ID
async function eliminarLote(id) {
    try {
        const response = await fetch(`http://localhost:8080/lote/${id}/eliminarLote`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        console.log(`Lote con ID ${id} eliminado.`);
    } catch (error) {
        console.error(`Error al eliminar lote con ID ${id}:`, error);
    }
}

// Exportar las funciones
module.exports = {
    fetchLotes,
    fetchLoteById,
    crearLote,
    actualizarLote,
    eliminarLote,
};

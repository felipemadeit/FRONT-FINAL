// GET: Obtener todas las facturas
async function fetchFacturas() {
    try {
        const response = await fetch("http://localhost:8080/factura/getFacturas", {
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
        console.log("Facturas obtenidas:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener facturas:", error);
    }
}

// GET: Obtener una factura por ID
async function fetchFacturaById(id) {
    try {
        const response = await fetch(`http://localhost:8080/factura/${id}`, {
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
        console.log(`Factura con ID ${id} obtenida:`, data);
        return data;
    } catch (error) {
        console.error(`Error al obtener factura con ID ${id}:`, error);
    }
}

// POST: Crear una nueva factura
async function crearFactura(factura) {
    try {
        const response = await fetch("http://localhost:8080/factura/crearFactura", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(factura),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log("Factura creada:", data);
        return data;
    } catch (error) {
        console.error("Error al crear factura:", error);
    }
}

// PUT: Actualizar una factura por ID
async function actualizarFactura(id, factura) {
    try {
        const response = await fetch(`http://localhost:8080/factura/${id}/actualizarFactura`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(factura),
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log(`Factura con ID ${id} actualizada:`, data);
        return data;
    } catch (error) {
        console.error(`Error al actualizar factura con ID ${id}:`, error);
    }
}

// DELETE: Eliminar una factura por ID
async function eliminarFactura(id) {
    try {
        const response = await fetch(`http://localhost:8080/factura/${id}/eliminarFactura`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = `Error: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        console.log(`Factura con ID ${id} eliminada.`);
    } catch (error) {
        console.error(`Error al eliminar factura con ID ${id}:`, error);
    }
}

// Exportar las funciones
module.exports = {
    fetchFacturas,
    fetchFacturaById,
    crearFactura,
    actualizarFactura,
    eliminarFactura,
};

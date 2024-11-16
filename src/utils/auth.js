export const isAuthenticated = () => {
    // Verificación de no estar en el servidor si no no funciona jaja, cositas de astro
    if (typeof window === "undefined") return false;
    
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const isExpired = payload.exp && Date.now() >= payload.exp * 1000;
        return !isExpired;
    } catch {
        return false;
    }
};

export const redirectToLoginIfNotAuthenticated = () => {
    if (typeof window === "undefined") return;
    
    if (!isAuthenticated()) {
        window.location.href = '/login';
    }
};

export default redirectToLoginIfNotAuthenticated;
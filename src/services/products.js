
const URL = "https://69409b7d993d68afba6c8ae0.mockapi.io/products";

export const createProduct = async (product) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("Error al crear producto");
        }
    } catch (error) {
        throw error;
    }
};
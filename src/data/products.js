

const products = [
    {
        id: 1,
        name: "Medialuna de Manteca",
        price: 350.00, 
        description: "Clásica medialuna argentina, con un toque dulce y almibarado.", 
        category: "Factura",
        stock: 50,
        image: "/assets/medialuna.jpg" 
    },
    {
        id: 2,
        name: "Pan de Campo Integral", 
        price: 1200.00, 
        description: "Miga aireada y corteza crujiente. Ideal para tostadas.", 
        category: "Pan",
        stock: 20,
        image: "/assets/pan_integral.jpg"
    },
    {
        id: 3,
        name: "Torta Rogel (Porción)", 
        price: 2500.00, 
        description: "Postre argentino de capas de hojaldre, dulce de leche y merengue italiano.",
        category: "Pasteleria",
        stock: 15,
        image: "/assets/rogel.jpg"
    }
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000); 
    });
};


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)));
        }, 500);
    });
};


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            const filteredProducts = products.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 500);
    });
};
import React, { createContext, useState } from 'react';


export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
});


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log("Carrito actual:", cart); 

 
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            
            console.error("El producto ya fue agregado");
        }
    };

   
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    // Función vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // Función auxiliar para saber si está en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
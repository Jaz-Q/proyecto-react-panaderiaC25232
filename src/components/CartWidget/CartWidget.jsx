import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to='/cart' style={{ textDecoration: 'none', color: '#8b4513', display: totalQuantity > 0 ? 'block' : 'none' }}>
            <span style={{ fontSize: '1.5rem' }}>🛒</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{totalQuantity}</span>
        </Link>
    );
}

export default CartWidget;
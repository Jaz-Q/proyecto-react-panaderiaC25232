import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, removeItem } = useContext(CartContext);

    
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>No hay productos en el carrito 🛒</h2>
                <Link to='/' style={{ textDecoration: 'none', backgroundColor: '#d35400', color: 'white', padding: '10px', borderRadius: '5px' }}>
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {cart.map(p => (
                <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', padding: '20px 0' }}>
                    <div>
                        <h3>{p.name}</h3>
                        <p>Cantidad: {p.quantity}</p>
                        <p>Precio unit.: ${p.price}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold', marginRight: '20px' }}>Subtotal: ${p.price * p.quantity}</p>
                        <button onClick={() => removeItem(p.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                            X
                        </button>
                    </div>
                </div>
            ))}

            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <h2>Total: ${total}</h2>
                <button onClick={() => clearCart()} style={{ marginRight: '10px', padding: '10px' }}>Vaciar Carrito</button>
                
              
                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                    <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1.1rem' }}>
                        Terminar Compra
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
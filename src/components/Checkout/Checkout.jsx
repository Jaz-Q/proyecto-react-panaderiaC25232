import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    
    // Estados para los datos del formulario
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const createOrder = (event) => {
        event.preventDefault();

       
        const order = {
            buyer: { name, phone, email },
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: new Date()
        };

        
        console.log("Orden creada:", order);
        
       
        setTimeout(() => {
            const fakeId = `ORD-${Math.floor(Math.random() * 1000000)}`;
            setOrderId(fakeId);
            clearCart(); 
        }, 2000);
    };

    if (orderId) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2 style={{color: 'green'}}>¡Gracias por tu compra! 🎉</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
                <p>Te hemos enviado un correo con los detalles.</p>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>Terminar Compra</h2>
            <form onSubmit={createOrder} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div>
                    <label>Nombre Completo</label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div>
                    <label>Teléfono</label>
                    <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <button type="submit" style={{ backgroundColor: '#8b4513', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer' }}>
                    Generar Orden
                </button>
            </form>
        </div>
    );
}

export default Checkout;
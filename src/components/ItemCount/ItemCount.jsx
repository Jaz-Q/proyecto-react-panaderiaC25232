import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="Counter">
            <div className="Controls">
                <button onClick={decrement}>-</button>
                <h4 style={{margin: '0 10px', display: 'inline-block'}}>{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div style={{marginTop: '10px'}}>
                <button onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
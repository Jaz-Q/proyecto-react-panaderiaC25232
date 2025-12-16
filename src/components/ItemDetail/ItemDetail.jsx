import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount'; 
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; 

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

   
    const { addItem } = useContext(CartContext);

   
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        
        const item = {
            id, name, price
        };

     
        addItem(item, quantity);
    };

    return (
        <article style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '10px', maxWidth: '500px' }}>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: '100%', borderRadius: '5px' }} /> 
            </picture>
            <section style={{ marginTop: '20px' }}>
                <p>Categoría: {category}</p>
                <p>Descripción: {description}</p>
                <h3>Precio: ${price}</h3>
            </section>
            <footer style={{ marginTop: '20px' }}>
              
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' style={{ textDecoration: 'none' }}>
                            <button style={{backgroundColor: 'green', color: 'white', padding: '10px'}}>Terminar compra</button>
                        </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    );
};

export default ItemDetail;
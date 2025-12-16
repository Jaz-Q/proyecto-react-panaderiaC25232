import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/products.js'; 
import ItemDetail from '../ItemDetail/ItemDetail'; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    
    
    const { itemId } = useParams(); 

    useEffect(() => {
       
        getProductById(itemId) 
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]); 

    return (
        <div className="ItemDetailContainer">
            
            {product ? <ItemDetail {...product} /> : <h2>Cargando...</h2>}
        </div>
    );
};

export default ItemDetailContainer;
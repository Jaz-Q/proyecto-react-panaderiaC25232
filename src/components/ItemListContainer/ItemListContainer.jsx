import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    const URL_API = "https://69409b7d993d68afba6c8ae0.mockapi.io/products";

    useEffect(() => {
        setLoading(true);

    
        fetch(URL_API)
            .then(res => res.json())
            .then(data => {
                
                if (categoryId) {
                    const filteredProducts = data.filter(prod => prod.category === categoryId);
                    setProducts(filteredProducts);
                } else {
                    
                    setProducts(data);
                }
            })
            .catch(error => console.error("Error cargando productos:", error))
            .finally(() => setLoading(false));

    }, [categoryId]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>{greeting}</h2>
            {loading ? <h3>Cargando productos...</h3> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;
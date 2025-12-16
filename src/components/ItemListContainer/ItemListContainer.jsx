import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../data/products.js'; 
import ItemList from '../ItemList/ItemList'; 

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    const [searchTerm, setSearchTerm] = useState(''); 
    
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);

    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container" style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                {categoryId ? `Categoría: ${categoryId}` : 'Nuestro Menú de Panadería 🍞'}
            </h2>

            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                <input 
                    type="text" 
                    placeholder="🔍 Buscar medialuna, pan..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ 
                        padding: '10px', 
                        width: '300px', 
                        borderRadius: '20px', 
                        border: '1px solid #ccc',
                        fontSize: '1rem' 
                    }}
                />
            </div>
            
           
            <ItemList products={filteredProducts} />
        </div>
    );
};

export default ItemListContainer;
import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {products.map(prod => (
            
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;
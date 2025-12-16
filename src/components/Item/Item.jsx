import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    const fallbackImage = "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80";

    const handleImageError = (e) => {
        e.target.src = fallbackImage; 
    };

    return (
        <article style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '250px', textAlign: 'center', backgroundColor: 'white', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)' }}>
            <header>
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0' }}>{name}</h3>
            </header>
            <picture>
    
                <img 
                    src={img || fallbackImage} 
                    alt={name} 
                    onError={handleImageError}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} 
                />
            </picture>
            <section style={{ marginTop: '10px' }}>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: '5px 0' }}>${price}</p>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Stock: {stock}</p>
            </section>
            <footer style={{ marginTop: '15px' }}>
                <Link to={`/item/${id}`} style={{ textDecoration: 'none', backgroundColor: '#8b4513', color: 'white', padding: '10px 20px', borderRadius: '5px', display: 'inline-block' }}>
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
};

export default Item;
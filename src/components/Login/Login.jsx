import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username.trim()) {
            
            login({ name: username, email: 'user@example.com' });
            navigate('/'); 
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h2>Iniciar Sesión 🔐</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
                <input 
                    type="text" 
                    placeholder="Ingresa tu nombre" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ padding: '10px' }}
                />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
                    Entrar
                </button>
            </form>
        </div>
    );
};

export default Login;
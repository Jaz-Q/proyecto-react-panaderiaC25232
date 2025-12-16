import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'; 
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand">
                🥖 El Horno Mágico
            </NavLink>

            <ul className="navbar-links">
               
                <li><NavLink to="/category/Factura" className={({ isActive }) => isActive ? "active-link" : ""}>Facturas</NavLink></li>
                <li><NavLink to="/category/Pan" className={({ isActive }) => isActive ? "active-link" : ""}>Panes</NavLink></li>
                <li><NavLink to="/category/Pasteleria" className={({ isActive }) => isActive ? "active-link" : ""}>Pastelería</NavLink></li>
            </ul>

           
            <div style={{ marginLeft: '20px' }}>
                <CartWidget />
            </div>
        </nav>
    );
}

export default Nav;
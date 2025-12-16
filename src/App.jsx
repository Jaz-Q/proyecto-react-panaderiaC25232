import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nav from './components/Nav/Nav'; 
import { CartProvider } from './context/CartContext'; 
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './components/Login/Login'; 
import { Navigate } from 'react-router-dom';
import './App.css';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
};

function App() {
  return (
    <div className="App">
      <AuthProvider> {/* 1. Nuevo Provider afuera de todo */}
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            
            {/* 2. Ruta de Login Pública */}
            <Route path="/login" element={<Login />} />
            
            {/* 3. Rutas Privadas (Protegidas) */}
            <Route path="/cart" element={
                <ProtectedRoute>
                    <Cart />
                </ProtectedRoute>
            } />
            
            <Route path="/checkout" element={
                <ProtectedRoute>
                    <Checkout />
                </ProtectedRoute>
            } />
            
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
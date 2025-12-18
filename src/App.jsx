import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


import Nav from "./components/Nav/Nav";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout"; 

import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";

import { CartProvider } from "./context/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        
        <Routes>
          {/* --- RUTAS PÚBLICAS (Catálogo y Carrito) --- */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* --- RUTA DE ADMINISTRACIÓN (Login + Alta) --- */}
          <Route path="/admin" element={<ProductFormContainer />} />
          
        </Routes>
        
        <ToastContainer position="bottom-right" autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

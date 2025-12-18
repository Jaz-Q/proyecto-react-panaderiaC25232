import "./ProductFormContainer.css";
import { useState } from "react";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/products";

import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
  
  const [isLogged, setIsLogged] = useState(false);
  const [loginData, setLoginData] = useState({ user: '', pass: '' });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (loginData.user === 'admin' && loginData.pass === '1234') {
      setIsLogged(true);
    } else {
      alert("Credenciales incorrectas (Prueba: admin / 1234)");
    }
  };
  

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  
  
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadToImgbb(file);
      
      
      const productData = {
        ...product,
        price: Number(product.price),
        stock: Number(product.stock) || 10, 
        img: imageUrl, 
      };

      await createProduct(productData);
      alert("Producto cargado con exito");

      
      setProduct({ name: "", price: "", category: "", description: "", stock: "" });
      setFile(null);
    } catch (error) {
      setErrors({ general: error.message });
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      
      isLogged={isLogged}
      handleLogin={handleLogin}
      loginData={loginData}
      handleLoginChange={handleLoginChange}
      
      product={product}
      errors={errors}
      onChange={handleChange}
      onFileChange={setFile}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};
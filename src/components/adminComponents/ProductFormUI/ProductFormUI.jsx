import React from 'react';


export const ProductFormUI = ({ 
    
    product, errors, onChange, onFileChange, loading, onSubmit,
    
    isLogged, handleLogin, loginData, handleLoginChange 
}) => {

    
    if (!isLogged) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <div style={{ padding: '40px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
                    <h2>Acceso Restringido 🔒</h2>
                    <p style={{marginBottom: '20px'}}>Ingresa con <b>admin</b> y <b>1234</b></p>
                    
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '250px', margin: '0 auto' }}>
                        <input 
                            type="text" 
                            name="user" 
                            placeholder="Usuario" 
                            value={loginData?.user || ''} 
                            onChange={handleLoginChange}
                            style={{ padding: '10px' }}
                        />
                        <input 
                            type="password" 
                            name="pass" 
                            placeholder="Contraseña" 
                            value={loginData?.pass || ''} 
                            onChange={handleLoginChange}
                            style={{ padding: '10px' }}
                        />
                        <button type="submit" style={{ padding: '10px', backgroundColor: '#333', color: 'white', cursor: 'pointer' }}>
                            INGRESAR
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    

    return (
        <div className="product-form"> 
            <h2>Alta de Productos 📝</h2>
            <form onSubmit={onSubmit}>
                
                {/* Nombre */}
                <div> 
                    <label>Nombre</label>
                    <input type="text" name="name" value={product.name} onChange={onChange} />
                    {errors.name && <small style={{color: 'red'}}>{errors.name}</small>}
                </div>

                {/* Precio */}
                <div>
                    <label>Precio</label>
                    <input type="number" name="price" value={product.price} onChange={onChange} />
                    {errors.price && <small style={{color: 'red'}}>{errors.price}</small>}
                </div>

                {/* Stock */}
                <div>
                    <label>Stock</label>
                    <input type="number" name="stock" value={product.stock} onChange={onChange} />
                </div>

                {/* Categoría */}
                <div>
                    <label>Categoría</label>
                    <select 
                        name="category" 
                        value={product.category} 
                        onChange={onChange}
                        style={{ width: '100%', padding: '10px', background: '#3a3a3a', color: 'white', border: '1px solid #444', borderRadius: '8px' }}
                    >
                        <option value="">Seleccionar...</option>
                        <option value="Factura">Factura</option>
                        <option value="Pan">Pan</option>
                        <option value="Pasteleria">Pastelería</option>
                    </select>
                    {errors.category && <small style={{color: 'red'}}>{errors.category}</small>}
                </div>

                {/* Descripción */}
                <div>
                    <label>Descripción</label>
                    <textarea name="description" value={product.description} onChange={onChange} />
                    {errors.description && <small style={{color: 'red'}}>{errors.description}</small>}
                </div>

                {/* Imagen */}
                <div>
                    <label>Imagen</label>
                    <input type="file" onChange={(e) => onFileChange(e.target.files[0])} />
                </div>

                {/* Botón */}
                <button type="submit" className="btn-admin" disabled={loading} style={{ marginTop: '20px', width: '100%' }}>
                    {loading ? "Cargando..." : "Guardar Producto"}
                </button>
            </form>
        </div>
    );
};
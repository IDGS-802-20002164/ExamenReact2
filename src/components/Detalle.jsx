/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Detalle.css';
import StarRating from './StarRating';
import { useNavigate, useParams } from 'react-router-dom';


const Detalle = () => {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();
  const navigate = useNavigate();

  const regApi = async () => {
    try {
      const response = await fetch(`http://apisexam.somee.com/api/Productos/GetById/${productId}`);

      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }

      const data = await response.json();

      // Asegúrate de que data sea un objeto antes de asignarlo a product
      if (typeof data === 'object' && data !== null) {
        setProduct(data);
      } else {
        console.error('La respuesta de la API no es un objeto:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    regApi();
  }, [productId]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  const handleButonClick = (productId) => {
    // Redirige a la ruta con el ID del producto
    // Puedes personalizar la ruta según tus necesidades

    navigate(`/`);
  };

  return (
    <div className="search-container">
      <div key={product.id} className="card">
        <div className="image-container">
         
          {product.images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="circular-image"
            />
          ))}
        </div>
        <div className="card-content">
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Stock: {product.stock}</p>
          <StarRating rating={product.rating} />
          <br/>
          <button className="rounded-button" onClick={handleButonClick}>Comprar</button>
        </div>
      </div>
      
    </div>
  );
};

export default Detalle;

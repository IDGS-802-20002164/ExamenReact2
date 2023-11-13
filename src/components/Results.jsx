/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Results.css';
import StarRating from './StarRating';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();
  const [item, setItem] = useState('');
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://apisexam.somee.com/api/Productos/GetAll`,
        ); 

        if(item == ''){
          setName(searchTerm);
          
          }else{
            setName(item);
          }
        
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const data = await response.json();

        // Verificar si data.products tiene un valor antes de setear el estado
        if (data.products) {
          setProducts(data.products);
          setCount(data.products.length);
        }

        // Indicar que la carga ha terminado
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Indicar que la carga ha terminado incluso en caso de error
        setLoading(false);
      }
    };
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  if (loading) {
    return <p>Cargando...</p>; // Mostrar un mensaje de carga mientras se obtienen los datos
  }

  const filteredProducts = products.filter((product) => {
    
    const title = product.title && product.title.toLowerCase();
    if(item == ''){
        const searchTermLower = searchTerm && searchTerm.toLowerCase();
       
        return (
            title &&
            (!searchTermLower || title.includes(searchTermLower))
            
        )
    }else{
        const itemLower = item && item.toLowerCase();
        
        return(
            title &&
            (!itemLower || title.includes(itemLower))
        ) 
    }
    
  } 
  );

  

  const handleCardClick = (productId) => {
    // Redirige a la ruta con el ID del producto
    // Puedes personalizar la ruta según tus necesidades
    
    navigate(`/item/${productId}`);
  };

  const handleButonClick = (productId) => {
    // Redirige a la ruta con el ID del producto
    // Puedes personalizar la ruta según tus necesidades

    navigate(`/`);
  };

  
  
  return (
    <div className="search-container">
    <div className="image-container">
      <img src="https://previews.123rf.com/images/sellingpix/sellingpix1509/sellingpix150900039/45451543-tienda-virtual-dise%C3%B1o-de-logotipo-plantilla-vector-concepto-icono-logotipo-para-tienda-en-l%C3%ADnea.jpg" alt="Icono de búsqueda" className="search-icon" />
    </div>
    <input
      className="rounded-input"
      type="text"
      placeholder="Search by product name"
      value={item}
      onChange={(e) => setItem(e.target.value)}
    />
     <button className="rounded-button" onClick={handleButonClick}>Regresar</button>
     <br/>

     <h3>Resultados de la busqueda de {name}: {filteredProducts.length}</h3>
      {filteredProducts.map((product) => (
        <div key={product.id} className="card" onClick={() => handleCardClick(product.id)}>
          <img src={product.thumbnail} alt={product.title} className="card-image" />
          <div className="card-content">
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <StarRating rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;

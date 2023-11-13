/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Home.css'; // Asegúrate de tener un archivo de estilo (Home.css) para aplicar estilos personalizados
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // Redirigir a la ruta de resultados con el término de búsqueda en la URL
        navigate(`/items/search/${searchTerm}`);
      };

  return (
    <div className="home-container">
    <img
      className="center-image"
        src="https://previews.123rf.com/images/sellingpix/sellingpix1509/sellingpix150900039/45451543-tienda-virtual-dise%C3%B1o-de-logotipo-plantilla-vector-concepto-icono-logotipo-para-tienda-en-l%C3%ADnea.jpg" 
        alt={`Imagen de busqueda`}
        />
        <div className="search-container">
          <input
            className="rounded-input"
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="rounded-button" onClick={handleSearch}>Buscar</button>
        </div>
      </div>
    );
  };

export default Home;

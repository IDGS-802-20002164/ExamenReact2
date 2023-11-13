/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './components/Home'
import './components/Home.css';
import './components/Results.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Search from './components/Results';
import Detalle from './components/Detalle';


const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path="/items/search/:searchTerm" element={<Search  />} />
         <Route path="/item/:productId" element={<Detalle  />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App
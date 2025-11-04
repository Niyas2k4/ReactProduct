// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navsection from './components/Navsection'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';


function App() {
  

  return (
    <>
    <Navsection></Navsection>
    <Routes>
      <Route path='/' element={<Home></Home>} />
    </Routes>
    <Routes>
      <Route path='/view/:id' element={<ProductDetails></ProductDetails>} />
    </Routes>
      
    </>
  )
}

export default App

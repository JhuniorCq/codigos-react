
import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import { Inicio } from '../routes/Inicio';
import { Productos } from '../routes/Productos/Productos';
import { Principal } from '../routes/Principal';
import { Error } from '../routes/Error';
import './App.css'
import { Footer } from '../components/Footer/Footer';
import { Carrito } from '../routes/Carrito/Carrito';
import { ProductosProvider } from '../context/ProductosProvider';
import { CarritoProvider } from '../context/CarritoProvider';

function App() {
  return (
    <>
      <ProductosProvider>
        <CarritoProvider>
          <NavBar />
          <div className='contenedor'>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/principal' element={<Principal />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='/*' element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </CarritoProvider>
      </ProductosProvider>
    </>
  )
}

export default App

/*
  Instalaremos:
  1. Material UI: npm install @mui/material @emotion/react @emotion/styled
  2. Material Icons: npm install @mui/icons-material
  3. Bootstrap: Usar las CDN's
  4. React Roter DOM: npm install react-roter-dom
*/
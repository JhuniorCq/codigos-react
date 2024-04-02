
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { Error404 } from './routes/Error404';
import { Productos } from './components/Productos';
import { DetalllesProducto } from './components/DetallesProducto';
import { useState } from 'react';
import { Principal } from './components/Principal';
import { PrincipalHome } from './components/PrincipalHome';
import { PrincipalSecundario } from './components/PrincipalSecundario';
import { PrincipalTerciario } from './components/PrincipalTerciario';

function App() {

    const [productos, setProductos] = useState([
      { id: 1, nombre: "Producto 1", precio: 100 },
      { id: 2, nombre: "Producto 2", precio: 200 },
      { id: 3, nombre: "Producto 3", precio: 300 },
      { id: 4, nombre: "Producto 4", precio: 400 },
      { id: 5, nombre: "Producto 5", precio: 500 },
    ]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/principal' element={<Principal />}>
          <Route index element={<PrincipalHome />} />
          <Route path='/principal/secundario' element={<PrincipalSecundario />} />
          <Route path='/principal/terciario' element={<PrincipalTerciario />} />
          </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/productos' element={<Productos productos={productos} />} />
        <Route path='/productos/:id' element={<DetalllesProducto productos={productos} />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App;

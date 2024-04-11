
import { useEffect, useState } from 'react';
import { useGet } from './hooks/useGet';
import './buscadorPeliculas.css';
import { Pelicula } from './components/Pelicula';

//También podemos crear Componentes aparte para utilizarlos acá dentro
export const BuscadorPeliculas = () => {

  // API_KEY para usar la API TMDB
  const API_KEY = '7ec5529a4e86df58ce11ef8ae803504b';
  const urlBase = `https://api.themoviedb.org/3/search/movie`;

  const [peliculas, loading, setLoading, inputPelicula, getPelicula, manejarInput] = useGet(API_KEY, urlBase);

  const enviarForm = (evento) => {
    evento.preventDefault();
    setLoading(true);
    getPelicula();
  };
  
  useEffect(() => {
    //Luego de que se ACTUALIZA el ESTADO 'peliculas' IMPRIMO el ARRAY DE PELICULAS que me devuelve la API
    console.log(peliculas);
  }, [peliculas])

  return (
    <div className='contenedor'>
      <h1>Buscador de Películas</h1>

      <form className='formulario' onSubmit={enviarForm}>
        <input 
          type='text'
          id='inputPelicula'
          name='inputPelicula'
          className='input-buscar'
          onChange={manejarInput}
        />

        <button className='btn-buscar'>Buscar</button>
      </form>
      
      <div>
        <ul>
          {
            loading ? <p>Cargando ...</p>: (
              peliculas && peliculas.map((pelicula) => (
                <Pelicula 
                  id={pelicula.id}
                  poster_path={pelicula.poster_path}
                  title={pelicula.title}
                  overview={pelicula.overview}
                />
              ))
            )
          }
        </ul>
      </div>
    </div>
  );
};

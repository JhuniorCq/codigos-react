
import { useEffect, useState } from 'react';
import axios from 'axios';
import './buscadorPeliculas.css';

// Lo que podemos hacer ahora, es pasar la Lógica a otro Archivo
//También podemos crear Componentes aparte para utilizarlos acá dentro
export const BuscadorPeliculas = () => {

  // API_KEY para usar la API TMDB
  const API_KEY = '7ec5529a4e86df58ce11ef8ae803504b';
  const urlBase = `https://api.themoviedb.org/3/search/movie`;

  const [inputPelicula, setInputPelicula] = useState('');

  const [peliculas, setPeliculas] = useState([]);

  const getPelicula = async () => {
    try {
      const response = await axios.get(`${urlBase}?query=${inputPelicula}&api_key=${API_KEY}`);
      const arrayPeliculas = response.data.results;

      setPeliculas(arrayPeliculas);
    } catch(error) {
      console.error('', error.message);
    }
  };

  const manejarInput = ({ target }) => {
    const { value } = target;
    setInputPelicula(value);
  };

  const enviarForm = (evento) => {
    evento.preventDefault();

    getPelicula();
  };
  
  useEffect(() => {
    //Luego de que se ACTUALIZA el ESTADO 'peliculas' IMPRIMO el ARRAY DE PELICULAS que me devuelve la API
    console.log(peliculas);
    // console.log(peliculas.results);
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
            peliculas && peliculas.map((pelicula) => (
              <div key={pelicula.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={`${pelicula.title}`} />
                <h2>{pelicula.title}</h2>
                <p>{pelicula.overview}</p>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

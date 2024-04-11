import { useState } from 'react';
import axios from 'axios';

export const useGet = (API_KEY, urlBase) => {

  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(false);

  const [inputPelicula, setInputPelicula] = useState('');
  
  const URL = `${urlBase}?query=${inputPelicula}&api_key=${API_KEY}`;

  const getPeliculas = async () => {
    try {
      const response = await axios.get(URL);
      const arrayPeliculas = response.data.results;

      setPeliculas(arrayPeliculas);
      setLoading(false);

    } catch (error) {
      console.error("", error.message);
    }
  };

  const manejarInput = ({ target }) => {
    const { value } = target;
    setInputPelicula(value);
  };


  return [
    peliculas,
    loading,
    setLoading,
    inputPelicula,
    getPeliculas,
    manejarInput
  ];
};

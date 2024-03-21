import { useEffect, useState } from "react";
import axios from 'axios';

const useGet = (url) => {

  const [stateForm, setStateForm] = useState({
    usuarios: [], /* En vez de usuarios puedo poner "response", para que sea algo más GENERAL */
    loading: true,
    error: null
  });

  const getUsuarios = async () => {
    try {

      const response = await axios.get(url);
      const arrayUsuarios = response.data;
      
      setStateForm({
        usuarios: arrayUsuarios,
        loading: false,
        error: null
      });
    } catch(error) {
      console.error('', error.message);
      setStateForm({
        usuarios: null,
        loading: false,
        error: error
      });
    }
  };
  
  useEffect(() => {
    getUsuarios();
  }, [url]);

  return stateForm;
};

export default useGet;

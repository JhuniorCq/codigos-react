import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useGet = (url) => {
  const [stateProductos, setStateProductos] = useState({
    productos: [],
    loading: true
  });

  const getProductos = async () => {
    try {
      const response = await axios.get(url);
      const arrayProductos = response.data;
      setStateProductos({
        productos: arrayProductos,
        loading: false
      });
    } catch (error) {
      console.error("", error.message);
    }
  };

  // const getProductosCallback = useCallback(() => {
  //   getProductos();
  // }, [url]);

  useEffect(() => {
    getProductos();
  }, [url]);

  return stateProductos;
};

import { useState, useEffect } from "react";

// hook que se encargue de realizar cuaquier petición a una API
export const useFetch = (urlOrFunction, dependencies = []) => {
  // estado para guardar la data
  const [data, setData] = useState(null);
  // estado para guardar el loading
  const [loading, setLoading] = useState(true);
  // estado para guardar el error
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let result;
        
        if (typeof urlOrFunction === 'function') {
          result = await urlOrFunction();
        } else {
          const response = await fetch(urlOrFunction);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          result = await response.json();
        }
        
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message || 'Ocurrió un error al cargar los datos');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

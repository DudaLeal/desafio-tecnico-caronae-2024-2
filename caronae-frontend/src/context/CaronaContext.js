import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CaronaContext = createContext();

export const CaronaProvider = ({ children }) => {
  const [caronas, setCaronas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://mocki.io/v1/753cf50d-4bec-427f-bd07-e49387240ee3')
      .then(response => {
        setCaronas(response.data.caronas);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <CaronaContext.Provider value={{ caronas, error }}>
      {children}
    </CaronaContext.Provider>
  );
};

export const useCarona = () => useContext(CaronaContext);

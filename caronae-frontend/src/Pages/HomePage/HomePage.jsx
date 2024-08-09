import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RideCard from '../../components/RideCard/RideCard';
import './HomePage.css';

const HomePage = () => {
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

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="home-container">
      <div className="card-container">
        {caronas.length > 0 ? (
          caronas.map((carona, index) => (
            <RideCard key={index} carona={carona} />
          ))
        ) : (
          <p>Nenhuma carona disponível.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import RideCard from '../../components/RideCard/RideCard';
import { useCarona } from '../../context/CaronaContext';
import './HomePage.css';

const HomePage = () => {
  const { caronas, error } = useCarona();

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

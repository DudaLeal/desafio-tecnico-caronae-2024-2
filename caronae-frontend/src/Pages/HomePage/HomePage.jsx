import React, { useState } from 'react';
import RideCard from '../../components/RideCard/RideCard';
import { useCarona } from '../../context/CaronaContext';
import './HomePage.css';
import ToggleButton from '../../components/ToggleButton/ToggleButton';

const HomePage = () => {
  const { caronas, error } = useCarona();
  const [filtro, setFiltro] = useState('chegando');

  const handleToggle = (option) => {
    setFiltro(option);
  };

  const caronasFiltradas = caronas.filter((carona) => {
    if (filtro === 'chegando') return carona.indo;
    return !carona.indo;
  });

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="home-container">
      <div className="toggle-container">
        <ToggleButton onToggle={handleToggle} />
      </div>
      <div className="card-container">
        {caronasFiltradas.length > 0 ? (
          caronasFiltradas.map((carona, index) => (
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

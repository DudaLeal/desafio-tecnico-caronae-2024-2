import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RideCard.css';

const RideCard = ({ carona }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/carona/${carona.motorista.telefone}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="header">
        <div className="photo">
          <img src={carona.motorista.foto} alt={carona.motorista.nome} />
        </div>
        <div className="info">
          <h2>{carona.motorista.nome}</h2>
          <p>{carona.motorista.situacao}</p>
        </div>
      </div>
      <div className="content">
        <div className="hora-local">
          <div className="partida">
            <span className="hora-partida">{carona.horario_partida}</span>
            <span className="local-partida">{carona.local_partida}</span>
          </div>
          <div className="hora-local">
            <span className="hora-chegada">{carona.horario_chegada}</span>
            <span className="local-chegada">{carona.local_chegada}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideCard;

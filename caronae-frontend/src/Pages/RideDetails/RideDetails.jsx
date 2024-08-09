import React from 'react';
import { useParams } from 'react-router-dom';
import { useCarona } from '../../context/CaronaContext';
import './RideDetails.css';

const RideDetails = () => {
  const { id } = useParams(); // Obtém o telefone do motorista da URL
  const { caronas, error } = useCarona(); // Obtém os dados do contexto

  if (error) return <p>Error: {error.message}</p>;

  const carona = caronas.find(carona => carona.motorista.telefone === id);

  if (!carona) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="ride-details">
      <h1>Detalhes da Carona</h1>
      <div className="driver-info">
        <img src={carona.motorista.foto} alt={carona.motorista.nome} />
        <h2>{carona.motorista.nome}</h2>
        <p>{carona.motorista.situacao}</p>
      </div>
      <div className="ride-info">
        <h3>Horários</h3>
        <p><strong>Partida:</strong> {carona.horario_partida} - {carona.local_partida}</p>
        <p><strong>Chegada:</strong> {carona.horario_chegada} - {carona.local_chegada}</p>

        <h3>Rota</h3>
        <p>{carona.rota}</p>

        <h3>Observações</h3>
        <p>{carona.observacoes || 'Nenhuma observação'}</p>

        <h3>Vagas Disponíveis</h3>
        <p>{carona.vagas_disponiveis}</p>
      </div>
    </div>
  );
};

export default RideDetails;

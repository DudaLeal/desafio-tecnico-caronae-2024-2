import React from "react";
import { useParams } from "react-router-dom";
import { useCarona } from "../../context/CaronaContext";
import Timeline from "../../components/Timeline/Timeline";
import "./RideDetails.css";

const RideDetails = () => {
  const { id } = useParams();
  const { caronas, error } = useCarona();

  if (error) return <p>Error: {error.message}</p>;

  const carona = caronas.find((carona) => carona.motorista.telefone === id);

  if (!carona) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="ride-details">
      <div className="driver-card">
        <div className="driver-image">
          <img src={carona.motorista.foto} alt={carona.motorista.nome} />
        </div>
        <div className="driver-info">
          <h2 className="driver-name">{carona.motorista.nome}</h2>
          <p className="driver-title">{carona.motorista.situacao}</p>
        </div>
      </div>
      <div className="content-ride-details">
        <div className="ride-info">
          <div className="time-place">
            <Timeline
              horario_partida={carona.horario_partida}
              local_partida={carona.local_partida}
              horario_chegada={carona.horario_chegada}
              local_chegada={carona.local_chegada}
            />
          </div>
          <div className="ride-route">
            <p><strong>Rota:</strong> {carona.trajeto}</p>
            <p><strong>Ponto de encontro:</strong> {carona.ponto_encontro}</p>
            <p><strong>Vagas Disponíveis:</strong> {carona.vagas}</p>
          </div>
          <div className="note">
            <h3>Observações</h3>
            <p>{carona.observacoes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;

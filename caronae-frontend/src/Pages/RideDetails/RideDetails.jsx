import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCarona } from "../../context/CaronaContext";
import Timeline from "../../components/Timeline/Timeline";
import defaultPhoto from '../../assets/default-photo.jpg';
import { verificarLinkImagem } from '../../utils/verificarLinkImagem.js';
import "./RideDetails.css";

const RideDetails = () => {
  const { id } = useParams();
  const { caronas, error } = useCarona();
  const [imageSrc, setImageSrc] = useState(defaultPhoto);

  const carona = caronas.find((carona) => carona.motorista.telefone === id);

  useEffect(() => {
    const verificarImagem = async () => {
      if (carona && carona.motorista.foto) {
        const isLinkValid = await verificarLinkImagem(carona.motorista.foto);
        setImageSrc(isLinkValid ? carona.motorista.foto : defaultPhoto);
      }
    };

    verificarImagem();
  }, [carona]);

  if (error) return <p>Error: {error.message}</p>;

  if (!carona) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="ride-details">
      <div className="driver-card">
        <div className="driver-image">
          <img
            src={imageSrc}
            alt={carona.motorista.nome}
          />
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

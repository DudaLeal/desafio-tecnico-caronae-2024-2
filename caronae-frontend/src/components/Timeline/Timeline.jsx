import React from 'react';
import './Timeline.css'; // Importando o arquivo de estilos

const Timeline = ({ horario_partida,
  local_partida,
  horario_chegada,
  local_chegada }) => {
    return (
      <div className="timeline">
        <div className="timeline-progress"></div>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-content">
            <div>{horario_partida}</div>
            <div>{local_partida}</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div>{horario_chegada}</div>
              <div>{local_chegada}</div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Timeline;

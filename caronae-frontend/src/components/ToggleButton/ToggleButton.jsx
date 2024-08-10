import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ onToggle }) => {
  const [selectedOption, setSelectedOption] = useState('chegando');

  const handleToggle = (option) => {
    setSelectedOption(option);
    onToggle(option); 
  };

  return (
    <div className="toggle-button">
      <button
        className={selectedOption === 'chegando' ? 'active' : ''}
        onClick={() => handleToggle('chegando')}
      >
        Chegando na UFRJ
      </button>
      <button
        className={selectedOption === 'saindo' ? 'active' : ''}
        onClick={() => handleToggle('saindo')}
      >
        Saindo da UFRJ
      </button>
    </div>
  );
};

export default ToggleButton;

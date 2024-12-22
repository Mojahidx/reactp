
import React, { useState } from 'react';

function AjouterElement({onAjouter}) {
  const [nouvelElement, setNouvelElement] = useState('');

  const handleAjouter = () => {
    if (onAjouter) {
      onAjouter(nouvelElement);
      setNouvelElement('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nouvelElement}
        onChange={(e) => setNouvelElement(e.target.value)}
        placeholder="Ajouter un élément"
      />
      <button onClick={handleAjouter}>Insérer</button>
    </div>
  );
}

export default AjouterElement;

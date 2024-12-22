
import React, { useState } from 'react';

function ModifierElement({ tableau, onModifier }) {
  const [indexModifier, setIndexModifier] = useState('');
  const [nouvelleValeur, setNouvelleValeur] = useState('');

  const handleModifier = () => {
    const index = parseInt(indexModifier, 10);
    if (index >= 0 && index < tableau.length) {
      onModifier(index, nouvelleValeur);
      setIndexModifier('');
      setNouvelleValeur('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={indexModifier}
        onChange={(e) => setIndexModifier(e.target.value)}
        placeholder="Index à modifier"
      />
      <input
        type="text"
        value={nouvelleValeur}
        onChange={(e) => setNouvelleValeur(e.target.value)}
        placeholder="Nouvelle valeur"
      />
      <button onClick={handleModifier}>Modifier</button>
    </div>
  );
}

export default ModifierElement;

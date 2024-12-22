
import React, { useState } from 'react';

function ChercherElement({ tableau }) {
  const [elementRecherche, setElementRecherche] = useState('');
  const [resultatRecherche, setResultatRecherche] = useState(null);

  const handleChercher = () => {
    const index = tableau.indexOf(elementRecherche);
    if (index !== -1) {
      setResultatRecherche({ index, valeur: elementRecherche });
    } else {
      setResultatRecherche(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={elementRecherche}
        onChange={(e) => setElementRecherche(e.target.value)}
        placeholder="Chercher un élément"
      />
      <button onClick={handleChercher}>Chercher</button>
      {resultatRecherche !== null && (
        <div>
          Résultat : {resultatRecherche.valeur} trouvé à l'index {resultatRecherche.index}
        </div>
      )}
    </div>
  );
}

export default ChercherElement;

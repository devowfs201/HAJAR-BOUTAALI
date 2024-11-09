import { useEffect, useState } from 'react';

const Experts2 = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/experts2')
      .then((response) => response.json())
      .then((data) => setExperts(data))
      .catch((error) => console.error('Erreur:', error));
  }, []);

  return (
    <ul>
      {experts.map((expert) => (
        <li key={expert.id}>
          <h3>{expert.nom_complet}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Experts2;

import Evenement from './Evenement';

const Expert = ({ expert }) => (
  <li className="list-group-item mb-4 p-3 border rounded shadow-sm">
    <h3 className="h5 text-primary mb-3">{expert.nom_complet}</h3>
    <Evenement événements={expert.événements} />
  </li>
);

export default Expert;

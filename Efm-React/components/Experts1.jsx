import Expert from './Expert';
import expertsData from '../data/data';

const Experts1 = () => (
  <ul className="list-group list-group-flush">
    {expertsData.map((expert) => (
      <Expert key={expert.id} expert={expert} />
    ))}
  </ul>
);

export default Experts1;

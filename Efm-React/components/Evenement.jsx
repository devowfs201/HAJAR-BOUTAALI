import React from 'react';

const Evenement = ({ événements }) => {
  const totalCost = événements.reduce((acc, event) => acc + event.cout_journalier * event.durée, 0);

  return (
    <table className="table table-bordered table-striped mt-3">
      <thead className="table-dark">
        <tr>
          <th>Thème</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Description</th>
          <th>Coût Journalier</th>
          <th>Durée (jours)</th>
          <th>Coût Total Event</th>
        </tr>
      </thead>
      <tbody>
        {événements.map((event, index) => (
          <tr key={index}>
            <td>{event.thème}</td>
            <td>{event.date_debut}</td>
            <td>{event.date_fin}</td>
            <td>{event.description}</td>
            <td>{event.cout_journalier} DH</td>
            <td>{event.durée}</td>
            <td>{event.cout_journalier * event.durée} DH</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="6" className="text-end fw-bold">Total des coûts des événements assurés est :</td>
          <td className="fw-bold">{totalCost} DH</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Evenement;

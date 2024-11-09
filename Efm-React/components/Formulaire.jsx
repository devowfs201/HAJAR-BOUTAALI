import { useState } from 'react';

const Formulaire = () => {
  const [eventData, setEventData] = useState({
    thème: '',
    date_debut: '',
    date_fin: '',
    cout: '',
    expert: ''
  });

  const [errors, setErrors] = useState({
    thème: '',
    date_debut: '',
    date_fin: '',
    cout: '',
    expert: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { thème: '', date_debut: '', date_fin: '', cout: '', expert: '' };

    if (!eventData.thème) {
      newErrors.thème = 'Le thème est requis.';
      valid = false;
    }
    if (!eventData.date_debut) {
      newErrors.date_debut = 'La date de début est requise.';
      valid = false;
    }
    if (!eventData.date_fin) {
      newErrors.date_fin = 'La date de fin est requise.';
      valid = false;
    }
    if (new Date(eventData.date_debut) > new Date(eventData.date_fin)) {
      newErrors.date_debut = 'La date de début doit être avant la date de fin.';
      newErrors.date_fin = 'La date de fin doit être après la date de début.';
      valid = false;
    }
    if (!eventData.cout || eventData.cout <= 0) {
      newErrors.cout = 'Le coût doit être un nombre positif.';
      valid = false;
    }
    if (!eventData.expert) {
      newErrors.expert = 'Le nom de l\'expert est requis.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    const duration = calculateDuration(eventData.date_debut, eventData.date_fin);
    const totalCost = duration * eventData.cout;

    alert(`L’expert : ${eventData.expert} assurera le thème : ${eventData.thème}, avec un coût journalier : ${eventData.cout}DH, pour une durée de : ${duration} jours, soit un coût total de ${totalCost}DH`);
  };

  // Helper function to calculate duration
  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const duration = (endDate - startDate) / (1000 * 60 * 60 * 24); // Duration in days
    return Math.max(0, Math.ceil(duration)); // Ensure non-negative duration
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4 border rounded">
      <div className="mb-3">
        <label className="form-label">Thème:</label>
        <input
          type="text"
          name="thème"
          className="form-control"
          onChange={handleChange}
          value={eventData.thème}
        />
        {errors.thème && <div className="text-danger">{errors.thème}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Date de début:</label>
        <input
          type="date"
          name="date_debut"
          className="form-control"
          onChange={handleChange}
          value={eventData.date_debut}
        />
        {errors.date_debut && <div className="text-danger">{errors.date_debut}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Date de fin:</label>
        <input
          type="date"
          name="date_fin"
          className="form-control"
          onChange={handleChange}
          value={eventData.date_fin}
        />
        {errors.date_fin && <div className="text-danger">{errors.date_fin}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Coût:</label>
        <input
          type="number"
          name="cout"
          className="form-control"
          onChange={handleChange}
          value={eventData.cout}
        />
        {errors.cout && <div className="text-danger">{errors.cout}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Expert:</label>
        <input
          type="text"
          name="expert"
          className="form-control"
          onChange={handleChange}
          value={eventData.expert}
        />
        {errors.expert && <div className="text-danger">{errors.expert}</div>}
      </div>
      <button type="submit" className="btn btn-primary mt-3">Confirmer</button>
    </form>
  );
};

export default Formulaire;

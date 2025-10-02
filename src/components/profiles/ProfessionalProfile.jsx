import React, { useEffect, useState } from 'react';
import  getProfessional  from '../../services/professionalService';
import { useParams } from 'react-router';

const ProfessionalProfile = () => {
  const { id } = useParams();
  const [pro, setPro] = useState(null);

  useEffect(() => {
    getProfessional(id).then(setPro).catch(console.error);
  }, [id]);

  if (!pro) return <div>Loading...</div>;

  return (
    <div className="card">
      <h2 className="font-bold">{pro.name}</h2>
      <div className="small">Email: {pro.email}</div>
      <div className="small">Categories: {pro.categories?.join(', ') || '—'}</div>
      <div className="mt-2">
        <strong>Past tasks:</strong>
        {(pro.completed || []).map((c, i) => (<div key={i} className="p-1 small">{c.title} • ${c.price}</div>))}
      </div>
    </div>
  );
};

export default ProfessionalProfile;

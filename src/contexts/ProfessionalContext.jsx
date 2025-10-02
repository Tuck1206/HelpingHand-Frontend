import React, { createContext, useState, useEffect } from 'react';
import { getUserFromToken } from '../services/authService';

const ProfessionalContext = createContext(null);

const ProfessionalProvider = ({ children }) => {
  const payload = getUserFromToken();
  const [professional, setProfessional] = useState(payload?.isProfessional ? payload : null);

  useEffect(() => {
    setProfessional(getUserFromToken()?.isProfessional ? getUserFromToken() : null);
  }, []);

  return <ProfessionalContext.Provider value={{ professional, setProfessional }}>{children}</ProfessionalContext.Provider>;
};

export { ProfessionalContext, ProfessionalProvider };

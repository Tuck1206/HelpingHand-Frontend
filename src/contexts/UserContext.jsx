import React, { createContext, useState, useEffect } from 'react';
import { getUserFromToken } from '../services/authService';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromToken());

  useEffect(() => {
    setUser(getUserFromToken());
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export {
   UserContext, 
   UserProvider 
  };

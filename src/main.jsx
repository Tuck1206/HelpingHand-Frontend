import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import { ProfessionalProvider } from './contexts/ProfessionalContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProfessionalProvider>
        <App />
      </ProfessionalProvider>
    </UserProvider>
  </React.StrictMode>
);

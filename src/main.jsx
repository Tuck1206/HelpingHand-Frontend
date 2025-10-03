import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import { ProfessionalProvider } from './contexts/ProfessionalContext';
import './index.css';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProfessionalProvider>
        <App />
      </ProfessionalProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


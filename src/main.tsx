import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth_context';
import App from './App';
import './index.css';
import { MenuProvider } from '@/contexts/menu_context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

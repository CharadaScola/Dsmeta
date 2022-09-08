import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Esse documento está sendo respónsavel por reinderizar toda a aplicação no navegador.

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

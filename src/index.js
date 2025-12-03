import React from 'react';
import ReactDOM from 'react-dom/client'; // <- 'react-dom/client' use karo
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

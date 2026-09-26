import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Entry point
 * Build ID: v5.6.0 - Added todobrasil.jpeg and "Após se cadastrar" caption.
 */
const BUILD_ID = "v5.6.0_todobrasil_image_" + Date.now();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Cache bust token: {BUILD_ID.slice(0, 12)}

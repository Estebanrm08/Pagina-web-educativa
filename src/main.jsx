import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

// Obtiene el elemento raíz del DOM
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Crea el root

// Renderiza la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
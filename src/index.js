import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// If your CSS file is named styles.css, change this line to './styles.css'
import './index.css'; 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
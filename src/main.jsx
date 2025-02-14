import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Get the root container
const container = document.getElementById('root');

// Create a root and render the application
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('chat-theme') : null;
const initialTheme = savedTheme || 'light';
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', initialTheme);
  document.body.setAttribute('data-theme', initialTheme);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
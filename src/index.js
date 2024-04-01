import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ArrayProvider } from './data/ArrayContext';
import { FilterProvider } from './data/FilterContext';
import { SelectedProvider } from './data/SelectedContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <SelectedProvider>
  <ArrayProvider>
    <App />

  </ArrayProvider>
  </SelectedProvider>
  </FilterProvider>
  </React.StrictMode>
);
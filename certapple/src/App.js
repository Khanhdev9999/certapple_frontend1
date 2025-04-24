// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <Header />
   
      <AppRoutes />
    </Router>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Index from './pages/index.js'; 
import Point from './pages/point.js'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/index" element={<Index />} /> {/* Corrected route path */}
        <Route path="/point" element={<Point />} /> {/* Corrected route path */}

        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;

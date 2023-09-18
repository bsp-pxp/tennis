import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Index from './pages/index.js'; 
import Point from './pages/point.js'; 
import Game from './pages/game.js'; 
import Set from './pages/set.js'; 
import Match from './pages/match.js'; 



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/point" element={<Point />} />
        <Route path="/game" element={<Game />} /> 
        <Route path="/set" element={<Set />} /> 
        <Route path="/match" element={<Match />} /> 

        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;

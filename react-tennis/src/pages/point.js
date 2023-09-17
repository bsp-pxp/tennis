import React from 'react';
import PlayerSection from '../components/PlayerSection'; // Import the React component
//import Header from '../components/Header';

const Point = () => {
  const handleClick = () => {
    console.log('Hello, on client');
  };

  return (
    <div>
      <h1>I'm wondering</h1>
      <button id="tgt" onClick={handleClick}>
        Click me
      </button>

      
      <PlayerSection playerName="Jim Jimers" />
      <PlayerSection playerName="Opponent" />
    </div>
  );
};

export default Point;

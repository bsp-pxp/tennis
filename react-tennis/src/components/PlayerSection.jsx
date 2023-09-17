import React, { useState } from 'react';

function PlayerSection({ playerName = 'Welcome, world!' }) {
  const [winnerButtonText] = useState('Winner (Forehand)');
  const [errorButtonText] = useState('Error (Forehand)');

  const handlePoint = async (winningPlayer, pointResolution, pointPlayedFromCourtPosition, ballPlayedToPosition) => {
    try {
      const response = await fetch('http://localhost:3091/api/points', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pointScore: 'Your Point Score',
          wonByPlayer: winningPlayer,
          pointResolution,
          pointPlayedFromCourtPosition,
          ballPlayedToPosition,
          game: 'Your Game ID',
        }),
      });

      if (response.ok) {
        console.log('Point created successfully');
      } else {
        console.error('Error creating point');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>{playerName}</h2>
      <div className="options">
        <div className="column">
          <button id="winnerButtonPlayer" onClick={() => handlePoint(playerName, 'Winner', 'Net', 'Left baseline')}>
            {winnerButtonText}
          </button>
          <button id="errorButtonPlayer" onClick={() => handlePoint('Player', 'Error', 'Forehand', 'Net')}>
            {errorButtonText}
          </button>
        </div>
        <div className="column">
          <button
            id="winnerButtonOpponent"
            onClick={() => handlePoint('Opponent', 'Winner', 'Baseline', 'Net')}
          >
            Winner (Forehand)
          </button>
          <button
            id="errorButtonOpponent"
            onClick={() => handlePoint('Opponent', 'Error', 'Backhand', 'Baseline')}
          >
            Error (Forehand)
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerSection;

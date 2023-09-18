import React, { useState, useEffect } from 'react';

function GamesPage() {
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState({
    comments: '',
    tags: '',
    number: 1,
    set: '', // You can provide options for the set field
  });

  useEffect(() => {
    // Fetch existing games when the component mounts
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch('http://localhost:3091/api/games'); // Adjust the API endpoint
      if (response.ok) {
        const data = await response.json();
        setGames(data);
      }
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewGame({ ...newGame, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3091/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      });

      if (response.ok) {
        // Game created successfully, fetch updated list of games
        fetchGames();
        // Clear the form
        setNewGame({
          comments: '',
          tags: '',
          number: 1,
          set: '',
        });
      }
    } catch (error) {
      console.error('Error creating game:', error);
    }
  };

  return (
    <div>
      <h1>Games</h1>

      {/* Create New Game Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comments:</label>
          <input
            type="text"
            name="comments"
            value={newGame.comments}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tags:</label>
          <input
            type="text"
            name="tags"
            value={newGame.tags}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="number"
            name="number"
            value={newGame.number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Set:</label>
          <input
            type="text"
            name="set"
            value={newGame.set}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create Game</button>
      </form>

      {/* List of Existing Games */}
      <h2>Existing Games</h2>
      <ul>
        {games.map((game) => (
          <li key={game._id}>{game.comments}</li>
        ))}
      </ul>
    </div>
  );
}

export default GamesPage;

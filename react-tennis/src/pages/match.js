import React, { useState, useEffect } from 'react';

function MatchesPage() {
  const [matches, setMatches] = useState([]);
  const [users, setUsers] = useState([]);
  const [newMatch, setNewMatch] = useState({
    date: '',
    location: '',
    opponentName: '',
    opponentRank: 1,
    weather: '',
    courtType: '',
    temperature: '',
    user: '', // This should be a user's ID, not their name
  });

  useEffect(() => {
    // Fetch existing matches and users when the component mounts
    fetchMatches();
    fetchUsers();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await fetch('http://localhost:3091/api/matches');
      if (response.ok) {
        const data = await response.json();
        setMatches(data);
      }
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3091/api/users'); // Adjust the API endpoint
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Remove double quotes from the "user" field value
    const sanitizedValue = name === "user" ? value.replace(/"/g, "") : value;

    setNewMatch({ ...newMatch, [name]: sanitizedValue });
  };

  const createMatch = async () => {
    try {
      const response = await fetch('http://localhost:3091/api/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMatch),
      });

      if (response.ok) {
        // Match created successfully, you can fetch the updated list of matches
        fetchMatches();
        // Clear the form
        setNewMatch({
          date: '',
          location: '',
          opponentName: '',
          opponentRank: 1,
          weather: '',
          courtType: '',
          temperature: '',
          user: '',
        });
      } else {
        // Handle errors here
        console.error('Error creating match:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating match:', error);
    }
  };

  const getUserById = (userId) => {
    const user = users.find((user) => user._id === userId);
    return user ? user.playerName : 'Unknown User';
  };

  return (
    <div>
      <h1>Matches</h1>

      {/* Create New Match Form */}
      <form onSubmit={(event) => { event.preventDefault(); createMatch(); }}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={newMatch.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={newMatch.location}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Opponent Name:</label>
          <input
            type="text"
            name="opponentName"
            value={newMatch.opponentName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Opponent Rank:</label>
          <input
            type="number"
            name="opponentRank"
            value={newMatch.opponentRank}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Weather:</label>
          <select
            name="weather"
            value={newMatch.weather}
            onChange={handleInputChange}
          >
            <option value="">Select Weather</option>
            <option value="dry">Dry</option>
            <option value="wet">Wet</option>
            <option value="dry and windy">Dry and Windy</option>
            <option value="wet and windy">Wet and Windy</option>
          </select>
        </div>
        <div>
          <label>Court Type:</label>
          <select
            name="courtType"
            value={newMatch.courtType}
            onChange={handleInputChange}
          >
            <option value="">Select Court Type</option>
            <option value="indoor">Indoor</option>
            <option value="gravel">Gravel</option>
            <option value="grass">Grass</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label>Temperature:</label>
          <input
            type="number"
            name="temperature"
            value={newMatch.temperature}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>User:</label>
          <select
            name="user"
            value={newMatch.user}
            onChange={handleInputChange}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user._id} value={user.playerName}>
                {user.playerName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Match</button>
      </form>

      {/* List of Existing Matches */}
      <h2>Existing Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match._id}>
                        {new Date(match.date).toLocaleDateString()} - {match.opponentName} vs. {getUserById(match.userId)}
          </li>
        ))}
      </ul>
      {/* List of Existing Users */}
      <h2>Existing Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user._id} - {user.playerName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MatchesPage;

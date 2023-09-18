import React, { useState, useEffect } from 'react';

function SetsPage() {
  const [sets, setSets] = useState([]);
  const [newSet, setNewSet] = useState({
    comments: '',
    tags: '',
    number: 1, // Default to 1
    match: '', // You can provide options for the match field
  });

  useEffect(() => {
    // Fetch existing sets when the component mounts
    fetchSets();
  }, []);

  const fetchSets = async () => {
    try {
      const response = await fetch('http://localhost:3091/api/sets'); // Adjust the API endpoint
      if (response.ok) {
        const data = await response.json();
        setSets(data);
      }
    } catch (error) {
      console.error('Error fetching sets:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSet({ ...newSet, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3091/api/sets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSet),
      });

      if (response.ok) {
        // Set created successfully, fetch updated list of sets
        fetchSets();
        // Clear the form
        setNewSet({
          comments: '',
          tags: '',
          number: 1, // Reset to default value
          match: '',
        });
      }
    } catch (error) {
      console.error('Error creating set:', error);
    }
  };

  return (
    <div>
      <h1>Sets</h1>

      {/* Create New Set Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comments:</label>
          <input
            type="text"
            name="comments"
            value={newSet.comments}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tags:</label>
          <input
            type="text"
            name="tags"
            value={newSet.tags}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Number:</label>
          <select
            name="number"
            value={newSet.number}
            onChange={handleInputChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div>
          <label>Match:</label>
          <input
            type="text"
            name="match"
            value={newSet.match}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create Set</button>
      </form>

      {/* List of Existing Sets */}
      <h2>Existing Sets</h2>
      <ul>
        {sets.map((set) => (
          <li key={set._id}>{set.match}: {set.comments}</li>
        ))}
      </ul>
    </div>
  );
}

export default SetsPage;

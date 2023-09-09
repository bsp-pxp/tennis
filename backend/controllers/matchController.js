// controllers/matchController.js

const { Match } = require('../models');

// Create a new match
async function createMatch(req, res) {
  try {
    const matchData = req.body;
    const match = new Match(matchData);
    const savedMatch = await match.save();
    res.json(savedMatch);
  } catch (error) {
    console.error('Error creating match:', error);
    res.status(500).json({ error: 'Could not create match.' });
  }
}

// Retrieve all matches
async function getMatches(req, res) {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ error: 'Could not fetch matches.' });
  }
}

// Add more CRUD functions for updating and deleting matches as needed

module.exports = {
  createMatch,
  getMatches,
  // Add other CRUD functions here
};

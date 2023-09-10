const { Match } = require('../models/match');

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

// Retrieve a specific match by ID
async function getMatchById(req, res) {
  try {
    const matchId = req.params.id;
    const match = await Match.findById(matchId);
    if (!match) {
      res.status(404).json({ error: 'Match not found.' });
      return;
    }
    res.json(match);
  } catch (error) {
    console.error('Error fetching match by ID:', error);
    res.status(500).json({ error: 'Could not fetch match.' });
  }
}

// Update a match by ID
async function updateMatch(req, res) {
  try {
    const matchId = req.params.id;
    const updatedMatchData = req.body;
    const updatedMatch = await Match.findByIdAndUpdate(matchId, updatedMatchData, { new: true });
    if (!updatedMatch) {
      res.status(404).json({ error: 'Match not found.' });
      return;
    }
    res.json(updatedMatch);
  } catch (error) {
    console.error('Error updating match:', error);
    res.status(500).json({ error: 'Could not update match.' });
  }
}

// Delete a match by ID
async function deleteMatch(req, res) {
  try {
    const matchId = req.params.id;
    const deletedMatch = await Match.findByIdAndRemove(matchId);
    if (!deletedMatch) {
      res.status(404).json({ error: 'Match not found.' });
      return;
    }
    res.json(deletedMatch);
  } catch (error) {
    console.error('Error deleting match:', error);
    res.status(500).json({ error: 'Could not delete match.' });
  }
}

module.exports = {
  createMatch,
  getMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
};

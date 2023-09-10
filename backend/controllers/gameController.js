const { Game } = require('../models/game');

// Create a new game
async function createGame(req, res) {
  try {
    const gameData = req.body;
    const game = new Game(gameData);
    const savedGame = await game.save();
    res.json(savedGame);
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).json({ error: 'Could not create game.' });
  }
}

// Retrieve all games
async function getGames(req, res) {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Could not fetch games.' });
  }
}

// Retrieve a specific game by ID
async function getGameById(req, res) {
  try {
    const gameId = req.params.id;
    const game = await Game.findById(gameId);
    if (!game) {
      res.status(404).json({ error: 'Game not found.' });
      return;
    }
    res.json(game);
  } catch (error) {
    console.error('Error fetching game by ID:', error);
    res.status(500).json({ error: 'Could not fetch game.' });
  }
}

// Update a game by ID
async function updateGame(req, res) {
  try {
    const gameId = req.params.id;
    const updatedGameData = req.body;
    const updatedGame = await Game.findByIdAndUpdate(gameId, updatedGameData, { new: true });
    if (!updatedGame) {
      res.status(404).json({ error: 'Game not found.' });
      return;
    }
    res.json(updatedGame);
  } catch (error) {
    console.error('Error updating game:', error);
    res.status(500).json({ error: 'Could not update game.' });
  }
}

// Delete a game by ID
async function deleteGame(req, res) {
  try {
    const gameId = req.params.id;
    const deletedGame = await Game.findByIdAndRemove(gameId);
    if (!deletedGame) {
      res.status(404).json({ error: 'Game not found.' });
      return;
    }
    res.json(deletedGame);
  } catch (error) {
    console.error('Error deleting game:', error);
    res.status(500).json({ error: 'Could not delete game.' });
  }
}

module.exports = {
  createGame,
  getGames,
  getGameById,
  updateGame,
  deleteGame,
};

// controllers/gameController.js

const { Game } = require('../models');

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

// Add more CRUD functions for updating and deleting games as needed

module.exports = {
  createGame,
  getGames,
  // Add other CRUD functions here
};

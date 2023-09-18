// routes/gameRoutes.js

const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Create a new game
router.post('/api/games', gameController.createGame);

// Retrieve all games
router.get('/api/games', gameController.getGames);

// Retrieve a specific game by ID
router.get('/api/games/:id', gameController.getGameById);

// Update a game by ID
router.put('/api/games/:id', gameController.updateGame);

// Delete a game by ID
router.delete('/api/games/:id', gameController.deleteGame);

module.exports = router;

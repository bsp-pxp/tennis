// routes/gameRoutes.js

const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Create a new game
router.post('/games', gameController.createGame);

// Retrieve all games
router.get('/games', gameController.getGames);

// Retrieve a specific game by ID
router.get('/games/:id', gameController.getGameById);

// Update a game by ID
router.put('/games/:id', gameController.updateGame);

// Delete a game by ID
router.delete('/games/:id', gameController.deleteGame);

module.exports = router;

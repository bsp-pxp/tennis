// routes/matchRoutes.js

const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

// Create a new match
router.post('/api/matches', matchController.createMatch);

// Retrieve all matches
router.get('/api/matches', matchController.getMatches);

// Retrieve a specific match by ID
router.get('/api/matches/:id', matchController.getMatchById);

// Update a match by ID
router.put('/api/matches/:id', matchController.updateMatch);

// Delete a match by ID
router.delete('/api/matches/:id', matchController.deleteMatch);

module.exports = router;

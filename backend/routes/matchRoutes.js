// routes/matchRoutes.js

const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

// Create a new match
router.post('/matches', matchController.createMatch);

// Retrieve all matches
router.get('/matches', matchController.getMatches);

// Retrieve a specific match by ID
router.get('/matches/:id', matchController.getMatchById);

// Update a match by ID
router.put('/matches/:id', matchController.updateMatch);

// Delete a match by ID
router.delete('/matches/:id', matchController.deleteMatch);

module.exports = router;

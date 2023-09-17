// routes/setRoutes.js

const express = require('express');
const router = express.Router();
const setController = require('../controllers/setController');

// Create a new set
router.post('/api/sets', setController.createSet);

// Retrieve all sets
router.get('/api/sets', setController.getSets);

// Retrieve a specific set by ID
router.get('/api/sets/:id', setController.getSetById);

// Update a set by ID
router.put('/api/sets/:id', setController.updateSet);

// Delete a set by ID
router.delete('/api/sets/:id', setController.deleteSet);

module.exports = router;

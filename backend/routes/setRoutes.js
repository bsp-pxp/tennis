// routes/setRoutes.js

const express = require('express');
const router = express.Router();
const setController = require('../controllers/setController');

// Create a new set
router.post('/sets', setController.createSet);

// Retrieve all sets
router.get('/sets', setController.getSets);

// Retrieve a specific set by ID
router.get('/sets/:id', setController.getSetById);

// Update a set by ID
router.put('/sets/:id', setController.updateSet);

// Delete a set by ID
router.delete('/sets/:id', setController.deleteSet);

module.exports = router;

// routes/pointRoutes.js

const express = require('express');
const router = express.Router();
const pointController = require('../controllers/pointController');

// Create a new point
router.post('/points', pointController.createPoint);

// Retrieve all points
router.get('/points', pointController.getPoints);

// Retrieve a specific point by ID
router.get('/points/:id', pointController.getPointById);

// Update a point by ID
router.put('/points/:id', pointController.updatePoint);

// Delete a point by ID
router.delete('/points/:id', pointController.deletePoint);

module.exports = router;

// routes/pointRoutes.js

const express = require('express');
const router = express.Router();
const pointController = require('../controllers/pointController');

// Create a new point
router.post('/api/points', pointController.createPoint);

// Retrieve all points
router.get('/api/points', pointController.getPoints);

// Retrieve a specific point by ID
router.get('/api/points/:id', pointController.getPointById);

// Update a point by ID
router.put('/api/points/:id', pointController.updatePoint);

// Delete a point by ID
router.delete('/api/points/:id', pointController.deletePoint);

module.exports = router;

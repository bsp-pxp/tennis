// controllers/pointController.js

const { Point } = require('../models');

// Create a new point
async function createPoint(req, res) {
  try {
    const pointData = req.body;
    const point = new Point(pointData);
    const savedPoint = await point.save();
    res.json(savedPoint);
  } catch (error) {
    console.error('Error creating point:', error);
    res.status(500).json({ error: 'Could not create point.' });
  }
}

// Retrieve all points
async function getPoints(req, res) {
  try {
    const points = await Point.find();
    res.json(points);
  } catch (error) {
    console.error('Error fetching points:', error);
    res.status(500).json({ error: 'Could not fetch points.' });
  }
}

// Add more CRUD functions for updating and deleting points as needed

module.exports = {
  createPoint,
  getPoints,
  // Add other CRUD functions here
};

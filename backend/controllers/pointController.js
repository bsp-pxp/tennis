const { Point } = require('../models/point');

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

// Retrieve a specific point by ID
async function getPointById(req, res) {
  try {
    const pointId = req.params.id;
    const point = await Point.findById(pointId);
    if (!point) {
      res.status(404).json({ error: 'Point not found.' });
      return;
    }
    res.json(point);
  } catch (error) {
    console.error('Error fetching point by ID:', error);
    res.status(500).json({ error: 'Could not fetch point.' });
  }
}

// Update a point by ID
async function updatePoint(req, res) {
  try {
    const pointId = req.params.id;
    const updatedPointData = req.body;
    const updatedPoint = await Point.findByIdAndUpdate(pointId, updatedPointData, { new: true });
    if (!updatedPoint) {
      res.status(404).json({ error: 'Point not found.' });
      return;
    }
    res.json(updatedPoint);
  } catch (error) {
    console.error('Error updating point:', error);
    res.status(500).json({ error: 'Could not update point.' });
  }
}

// Delete a point by ID
async function deletePoint(req, res) {
  try {
    const pointId = req.params.id;
    const deletedPoint = await Point.findByIdAndRemove(pointId);
    if (!deletedPoint) {
      res.status(404).json({ error: 'Point not found.' });
      return;
    }
    res.json(deletedPoint);
  } catch (error) {
    console.error('Error deleting point:', error);
    res.status(500).json({ error: 'Could not delete point.' });
  }
}

module.exports = {
  createPoint,
  getPoints,
  getPointById,
  updatePoint,
  deletePoint,
};

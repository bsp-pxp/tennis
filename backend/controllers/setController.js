// controllers/setController.js

const { Set } = require('../models');

// Create a new set
async function createSet(req, res) {
  try {
    const setData = req.body;
    const set = new Set(setData);
    const savedSet = await set.save();
    res.json(savedSet);
  } catch (error) {
    console.error('Error creating set:', error);
    res.status(500).json({ error: 'Could not create set.' });
  }
}

// Retrieve all sets
async function getSets(req, res) {
  try {
    const sets = await Set.find();
    res.json(sets);
  } catch (error) {
    console.error('Error fetching sets:', error);
    res.status(500).json({ error: 'Could not fetch sets.' });
  }
}

// Add more CRUD functions for updating and deleting sets as needed

module.exports = {
  createSet,
  getSets,
  // Add other CRUD functions here
};

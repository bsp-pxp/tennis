const { Set } = require('../models/set');

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

// Retrieve a specific set by ID
async function getSetById(req, res) {
  try {
    const setId = req.params.id;
    const set = await Set.findById(setId);
    if (!set) {
      res.status(404).json({ error: 'Set not found.' });
      return;
    }
    res.json(set);
  } catch (error) {
    console.error('Error fetching set by ID:', error);
    res.status(500).json({ error: 'Could not fetch set.' });
  }
}

// Update a set by ID
async function updateSet(req, res) {
  try {
    const setId = req.params.id;
    const updatedSetData = req.body;
    const updatedSet = await Set.findByIdAndUpdate(setId, updatedSetData, { new: true });
    if (!updatedSet) {
      res.status(404).json({ error: 'Set not found.' });
      return;
    }
    res.json(updatedSet);
  } catch (error) {
    console.error('Error updating set:', error);
    res.status(500).json({ error: 'Could not update set.' });
  }
}

// Delete a set by ID
async function deleteSet(req, res) {
  try {
    const setId = req.params.id;
    const deletedSet = await Set.findByIdAndRemove(setId);
    if (!deletedSet) {
      res.status(404).json({ error: 'Set not found.' });
      return;
    }
    res.json(deletedSet);
  } catch (error) {
    console.error('Error deleting set:', error);
    res.status(500).json({ error: 'Could not delete set.' });
  }
}

module.exports = {
  createSet,
  getSets,
  getSetById,
  updateSet,
  deleteSet,
};

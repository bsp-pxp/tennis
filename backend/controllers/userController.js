// controllers/userController.js

const { User } = require('../models/user');

// Create a new user
async function createUser(req, res) {
  try {
    const { playerName } = req.body;
    const user = new User({ playerName });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Could not create user.' });
  }
}

// Retrieve all users
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Could not fetch users.' });
  }
}

// Retrieve a specific user by ID
async function getUserById(req, res) {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ error: 'Could not fetch user.' });
  }
}

// Update a user by ID
async function updateUser(req, res) {
  const userId = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user by ID:', error);
    res.status(500).json({ error: 'Could not update user.' });
  }
}

// Delete a user by ID
async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(deletedUser);
  } catch (error) {
    console.error('Error deleting user by ID:', error);
    res.status(500).json({ error: 'Could not delete user.' });
  }
}

module.exports = {
  User,
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};

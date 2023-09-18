// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/api/users', userController.createUser);

// Retrieve all users
router.get('/api/users', userController.getUsers);

// Retrieve a specific user by ID
router.get('/api/users/:id', userController.getUserById);

// Update a user by ID
router.put('/api/users/:id', userController.updateUser);

// Delete a user by ID
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;

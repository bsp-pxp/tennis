const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const setRoutes = require('./routes/setRoutes');
const matchRoutes = require('./routes/matchRoutes');
const pointRoutes = require('./routes/pointRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,  useUnifiedTopology: true,});

const db = mongoose.connection;

// Handle MongoDB connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Define your routes and server logic here
// Example: app.get('/api/scores', (req, res) => { ... });

// Create a new match
app.post('/api/matches', (req, res) => {
  // Handle creating a new match in MongoDB
  res.send('Create a new match'); // Placeholder response
});

// List matches
app.get('/api/matches', (req, res) => {
  // Retrieve and send a list of matches from MongoDB
  res.send('List matches'); // Placeholder response
});

// Use the imported routes
app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/sets', setRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/points', pointRoutes);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');

// Create an Express.js application
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('process.env.MONGODB_URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle MongoDB connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your routes and server logic here
// Example: app.get('/api/scores', (req, res) => { ... });

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');   // Import the user routes
const gameRoutes = require('./routes/gameRoutes');   // Import the game routes
const setRoutes = require('./routes/setRoutes');     // Import the set routes
const matchRoutes = require('./routes/matchRoutes'); // Import the match routes
const pointRoutes = require('./routes/pointRoutes');   // Import the point routes


const app

// Create a new match
app.post('/api/matches', (req, res) => {
  // Handle creating a new match in MongoDB
});

// List matches
app.get('/api/matches', (req, res) => {
  // Retrieve and send a list of matches from MongoDB
});
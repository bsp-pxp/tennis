require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // Import morgan

const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const setRoutes = require('./routes/setRoutes');
const matchRoutes = require('./routes/matchRoutes');
const pointRoutes = require('./routes/pointRoutes');
const Match = require('./models/match'); // Import the Match model

const app = express();
const PORT = process.env.PORT;

const cors = require('cors');

app.use(cors());
// Use the imported routes
app.use('/api/points', pointRoutes); // Use the correct route path
// Use morgan middleware for request logging
app.use(morgan('dev'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// POST route for creating a new match
app.post('/api/matches', async (req, res) => {
  try {
    // Extract data from the request body
    const { date, location, opponentName, opponentRank, weather, courtType, temperature, userId } = req.body;
    console.log('Received match data:', req.body);

    // Create a new Match document
    const match = new Match({
      date,
      location,
      opponentName,
      opponentRank,
      weather,
      courtType,
      temperature,
      user: userId, // Assign the user's ID to the 'user' field
    });

    // Save the match document to MongoDB
    const savedMatch = await match.save();
    console.log('Match created successfully:', savedMatch); // Log successful creation

    // Respond with a success message
    res.status(201).json({ message: 'Match created successfully' });
  } catch (error) {
    console.error('Error creating match:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// GET route for listing matches
app.get('/api/matches', async (req, res) => {
  try {
    // Fetch all matches from the database as plain JavaScript objects
    const matches = await Match.find().lean();
    res.status(200).json(matches);
  } catch (error) {
    console.error('Error listing matches:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/sets', setRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/points', pointRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

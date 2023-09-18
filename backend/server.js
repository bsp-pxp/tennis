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
const Game = require('./models/game'); // Import the Game model
const Set = require('./models/set'); // Import the Set model
const User = require('./models/user'); // Import the User model


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

    // Log the type of the 'userId' field
    console.log('Type of userId:', typeof userId);

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

// GET route for listing users
app.get('/api/users', async (req, res) => {
  try {
    // Fetch all users from the database as plain JavaScript objects
    const users = await User.find().lean();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error listing users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// POST route for creating a new game
app.post('/api/games', async (req, res) => {
  try {
    // Extract data from the request body
    const { comments, tags, number, set } = req.body;

    // Create a new Game document
    const game = new Game({
      comments,
      tags,
      number,
      set,
    });

    // Save the game document to MongoDB
    const savedGame = await game.save();
    console.log('Game created successfully:', savedGame); // Log successful creation

    // Respond with a success message
    res.status(201).json({ message: 'Game created successfully' });
  } catch (error) {
    console.error('Error creating game:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET route for listing games
app.get('/api/games', async (req, res) => {
  try {
    // Fetch all games from the database as plain JavaScript objects
    const games = await Game.find().lean();
    res.status(200).json(games);
  } catch (error) {
    console.error('Error listing games:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST route for creating a new set
app.post('/api/sets', async (req, res) => {
  try {
    // Extract data from the request body
    const { comments, tags, number, match } = req.body;

    // Create a new Set document
    const set = new Set({
      comments,
      tags,
      number,
      match,
    });

    // Save the set document to MongoDB
    const savedSet = await set.save();
    console.log('Set created successfully:', savedSet); // Log successful creation

    // Respond with a success message
    res.status(201).json({ message: 'Set created successfully' });
  } catch (error) {
    console.error('Error creating set:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET route for listing sets
app.get('/api/sets', async (req, res) => {
  try {
    // Fetch all sets from the database as plain JavaScript objects
    const sets = await Set.find().lean();
    res.status(200).json(sets);
  } catch (error) {
    console.error('Error listing sets:', error);
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

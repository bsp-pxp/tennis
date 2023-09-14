require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // Import morgan

const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const setRoutes = require('./routes/setRoutes');
const matchRoutes = require('./routes/matchRoutes');
const pointRoutes = require('./routes/pointRoutes');
const Point = require('./models/point');
const Match = require('./models/match'); 

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



app.post('/api/points', async (req, res) => {
  try {
    // Handle creating a new point in MongoDB
    console.log("Received POST point");
    
    // Log the pointData received in the request
    const pointData = req.body;
    console.log('Received point data:', pointData);

    const point = new Point(pointData);
    const savedPoint = await point.save();
    console.log('Point created successfully:', savedPoint);
    res.status(201).json(savedPoint);
  } catch (error) {
    console.error('Error creating point:', error);
    res.status(500).json({ error: 'Could not create point.' });
  }
});


// Modify the /api/matches endpoint to accept the user's ID
app.post('/api/matches', async (req, res) => {
  try {
    // Extract data from the request body, including the user's ID
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





app.get('/api/matches', (req, res) => {
  res.send('List matches'); // Placeholder response
});

app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/sets', setRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/points', pointRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

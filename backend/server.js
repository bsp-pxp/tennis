require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // Import morgan

const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const setRoutes = require('./routes/setRoutes');
const matchRoutes = require('./routes/matchRoutes');
const pointRoutes = require('./routes/pointRoutes');


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

app.post('/api/matches', (req, res) => {
  res.send('Create a new match'); // Placeholder response
});

app.post('/api/points', (req, res) => {
  // Handle creating a new point in MongoDB
  res.send('Create a new point'); // Placeholder response
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

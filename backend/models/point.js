// point.js

const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  pointScore: String,
  wonByPlayer: String, // Specify the type for wonByPlayer
  pointResolution: String, // Specify the type for pointResolution
  pointPlayedFromCourtPosition: String, // Specify the type for pointPlayedFromCourtPosition
  ballPlayedToPosition: String, // Specify the type for ballPlayedToPosition
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
});

module.exports = mongoose.model('Point', pointSchema);

// point.js

const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  pointScore: String,                  // the score before the current point was resolved
  wonByPlayer,                         // who won the point, player or opponent
  pointResolution,                     // was the point an error or a winner
  pointPlayedFromCourtPosition,        // where on the court wsa the error or winner played from
  ballPlayedToPosition                 // where on the court did the error or winner finish
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
});

module.exports = mongoose.model('Point', pointSchema);

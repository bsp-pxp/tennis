const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  location: String,
  opponentName: { type: String, required: true },
  opponentRank: Number,
  weather: { type: String, enum: ['dry', 'wet', 'dry and windy', 'wet and windy'] },
  courtType: { type: String, enum: ['indoor', 'gravel', 'grass', 'hard'] },
  temperature: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Match', matchSchema);

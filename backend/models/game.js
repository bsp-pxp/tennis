const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  comments: String,
  tags: String,
  number: { type: Number, default: 1 },
  set: { type: mongoose.Schema.Types.ObjectId, ref: 'Set' },
});

module.exports = mongoose.model('Game', gameSchema);

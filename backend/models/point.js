const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  pointResult: String,
  pointScore: String,
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
});

module.exports = mongoose.model('Point', pointSchema);

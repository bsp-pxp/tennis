const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
  comments: String,
  tags: String,
  number: { type: Number, default: 1 },
  match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
});

module.exports = mongoose.model('Set', setSchema);

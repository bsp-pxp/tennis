const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
  comments: String,
  tags: String,
  number: { type: Number, enum: [1, 2, 3] },
  match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
});

module.exports = mongoose.model('Set', setSchema);

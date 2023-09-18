const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  playerName: String,
});

module.exports = mongoose.model('User', userSchema);

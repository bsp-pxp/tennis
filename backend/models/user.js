const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  playerName: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

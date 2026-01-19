const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  pseudo: String,
  coups: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Score', ScoreSchema);

// src/models/portfolio.cjs
const mongoose = require('mongoose');
const { Schema } = mongoose;

const portfolioSchema = new Schema({
  user:      { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name:      { type: String, required: true },
  scripts:   { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Add unique compound index to prevent duplicate names per user
portfolioSchema.index({ user: 1, name: 1 }, { unique: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);

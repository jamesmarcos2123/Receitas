const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
  name: String,
  link: String,
  description: String,
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Video', videoSchema);
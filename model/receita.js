const mongoose = require('mongoose');


const receitaSchema = new mongoose.Schema({
  name: String,
  img: String,
  time: {type: Number, min: 1},
  portions: {type: Number, min: 1},
  ingredients: [],
  steps: [String]
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Receita', receitaSchema);
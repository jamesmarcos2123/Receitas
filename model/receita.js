const mongoose = require('mongoose');


const ingredientsSchema = new mongoose.Schema({
    name: String,
    qntd: Number,
  }, { 
    timestamps: true 
  });

const receitaSchema = new mongoose.Schema({
  name: String,
  img: String,
  time: {type: Number, min: 1},
  portions: {type: Number, min: 1},
  ingredients: [ingredientsSchema],
  steps: [String]
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Receita', receitaSchema);
const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  infinitive: String,
  past: String,
  participle: String,
  translation: String,
  learned: Boolean
},
{
  versionKey: false
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;

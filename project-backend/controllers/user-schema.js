const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  progress: Array,
  token: String
},
{
  versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  progress: Array,
  image: String,
  imagePath: String,
  token: String
},
{
  versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;

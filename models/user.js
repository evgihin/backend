const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
          name: String,
          about: String,
          avatar: String
  });
module.exports = mongoose.model('users', userSchema);
  


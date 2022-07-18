const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
            name: String,
            link: String,
            ownewr: Object,
            likes: Object,
            createdAt: Date
  });
module.exports = mongoose.model('cards', cardSchema);
  


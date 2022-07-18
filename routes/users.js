const express = require('express');
const r1 = express.Router();
const r2 = express.Router();
const r3 = express.Router();
/*
r1.post('/users', (req, res, next) => {
  res.send('Create User');
});
*/
r3.get('/users/:userId', (req, res, next) => {
  res.send('List users id:');
  next();
});
r2.get('/users', (req, res, next) => {
  res.send('List users');
  next();
});

module.exports = r1;
module.exports = r2;
module.exports = r3;

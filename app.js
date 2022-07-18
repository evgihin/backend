const mongoose = require('mongoose');
const express = require('express');
const user = require('./models/user');
const card = require('./models/card');
const r1 = require('./routes/users');
const r2 = require('./routes/users');
const r3 = require('./routes/users');
const port = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(r2, r3);

app.listen(port, ()=> {
	console.log(`listening ${port}`);
});



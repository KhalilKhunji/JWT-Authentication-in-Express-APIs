require('dotenv').config();
const express = require('express');
const app = express();
require('./config/database.js');

app.use(express.json());

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});
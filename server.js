require('dotenv').config();
const express = require('express');
const app = express();
require('./config/database.js');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());


// Routes

app.listen(port, () => {
  console.log('The express app is ready!');
});
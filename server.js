require('dotenv').config();
const express = require('express');
require('./config/database.js');
const morgan = require('morgan');

// Controllers
const testJWTRouter = require('./controllers/test-jwt');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/test-jwt', testJWTRouter);

app.listen(port, () => {
  console.log('The express app is ready!');
});
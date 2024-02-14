// Loading required libaries
const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./routes/index.js');

// Port to listen on
const PORT = process.env.port || 3001;

// Instance of Application with Express()
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);










// Local Server Port listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

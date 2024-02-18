// Loading required libaries
const express = require('express');

const path = require('path');
const api = require('./routes/index');

// Port to listen on
const PORT = process.env.PORT || 3001;

// Instance of Application with Express()
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));



// Send all the req's the start with '/api' to the index.js file in the routes folder
app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);








// Local Server Port listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

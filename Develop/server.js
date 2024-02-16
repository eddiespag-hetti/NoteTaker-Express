// Loading required libaries
const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./routes/index.js');

// Port to listen on
const PORT = process.env.port || 3001;

// Instance of Application with Express()
const app = express();

// Routes 
const htmlRoute = require('./routes/html_routes');
const apiRoute = require('./routes/api_route');
app.use('/html_routes', htmlRoute);
app.use('/api_routes', apiRouteRoute);

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
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);








// Local Server Port listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

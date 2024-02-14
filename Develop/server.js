// Loading required libaries
const express = require('express');
const fs = require('fs');

const PORT = process.env.port || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));











// Local Server Port listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

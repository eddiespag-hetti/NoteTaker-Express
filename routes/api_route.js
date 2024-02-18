// Calling required libraries and saving them to variables
const express = require("express");
const api_route = express.Router();
const fs = require("fs");

// Get Request route handler for data read from json file
api_route.get("/", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (error, data) =>
    error ? console.error(error) : res.json(JSON.parse(data))
  );
});

// Post request route handler to database with error handling
api_route.post("/", (req, res) => {
  console.log(req.body);
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    const oldNotes = JSON.parse(data);
    oldNotes.push(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(oldNotes), (err) =>
      err
        ? console.error(err)
        : res.json({ Message: "Successfully added new note" })
    );
  });
});


// Exporting file
module.exports = api_route;

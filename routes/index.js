// Saves Router() to a variable
const router = require("express").Router();

// Route
const apiRoute = require("./api_route");

// Middleware put on 'notes' endpoint
router.use("/notes", apiRoute);

// Exporting router
module.exports = router;

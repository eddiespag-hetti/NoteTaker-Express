const router = require("express").Router();

// Routes

const apiRoute = require("./api_route");

router.use("/notes", apiRoute);

module.exports = router;

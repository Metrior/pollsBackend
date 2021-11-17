const express = require("express");
const {} = require("../controllers/poll")

const Poll = require("../models/Poll")

const router = express.Router();

router
    .route("/api/polls?page={page}")
    .get()

router
    .route("/api/poll/add-poll")
    .put()

router
    .route("/api/poll/{poll}/vote/{option}")
    .put()

module.exports = router;

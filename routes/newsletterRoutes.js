const express = require("express");
const newsletter = require("../models/newsletter");

const router = express.Router();

router.post("/newsletter", newsletter);

module.exports = router;

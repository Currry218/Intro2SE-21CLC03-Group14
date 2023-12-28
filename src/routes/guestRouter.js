const express = require("express");
const controller = require("../controllers/guestController");
const router = express.Router();

router.get("/", controller.show);

module.exports = router;
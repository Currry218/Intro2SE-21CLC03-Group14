const express = require("express");
const controller = require("../controllers/guestController");
const router = express.Router();

router.get("/", controller.show);


// router.get("/product:id")

module.exports = router;
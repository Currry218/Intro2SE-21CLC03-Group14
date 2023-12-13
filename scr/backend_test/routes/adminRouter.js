const express = require("express");
const controller = require("../controllers/adminController");
const router = express.Router();

router.get("/", controller.show);
router.get("/homepage", controller.showHomepage);

module.exports = router;
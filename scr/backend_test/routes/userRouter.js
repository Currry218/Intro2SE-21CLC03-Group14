const express = require("express");
const controller = require("../controllers/userController");
const router = express.Router();

router.get("/", controller.show);
// router.get("/qldiemdat", controller.qldiemdat);
module.exports = router;
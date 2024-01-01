const express = require("express");
const controller = require("../controllers/adminController");
const router = express.Router();

router.get("/all", controller.showAll);
router.get("/reportbook", controller.showReportBook);
router.get("/reportacc", controller.showReportAcc);
router.get("/waitlist", controller.showWaitlist);
router.get("/", controller.show);

module.exports = router;
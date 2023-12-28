const express = require("express");
const controller = require("../controllers/adminController");
const router = express.Router();

router.get("/", controller.show);
router.get("/login", controller.showLogin);
router.get("/signup", controller.showSignup);
router.get("/reportacc", controller.showReportAcc);
router.get("/reportbook", controller.showReportBook);
router.get("/waitlist", controller.showWaitlist);


module.exports = router;
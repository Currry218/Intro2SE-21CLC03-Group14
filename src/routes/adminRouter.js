const express = require("express");
const controller = require("../controllers/adminController");
const router = express.Router();

router.get("/details/:id", controller.showDetails);
router.get("/all", controller.showAll);
router.get("/reportbook", controller.showReportBook);
router.get("/reportacc", controller.showReportAcc);
router.get("/waitlist", controller.showWaitlist);
router.get("/", controller.show);

router.put("/updatebook", controller.updateBook);
router.delete("/deletebook", controller.deleteBook);
router.delete("/deletereport", controller.deleteReport);

module.exports = router;
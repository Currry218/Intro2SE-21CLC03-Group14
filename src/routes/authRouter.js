const express = require("express");
const router = express.Router();
// const axios = require("axios");
const controller = require("../controllers/authController");
// const YOUR_RECAPTCHA_SECRET_KEY = '6Le4ZC8pAAAAAGJ2UkMgQm8AyeMrHrwmJYnwxtLg';

router.get("/login", controller.showLogin);
router.post("/login", controller.login);
router.get("/logout", controller.logout);

// router.get("/dangxuat", controller.dangXuat);

router.use("/", require("./guestRouter")); // controller.loggedIn
// router.use("/:id", controller.userLoggedIn, require("./userRouter")); // req.params.id
// router.use("/admin", controller.adminLoggedIn, require("./adminRouter"));
router.use("/:id", require("./userRouter"));
router.use("/admin", require("./adminRouter"));

module.exports = router;
const express = require("express");
const controller = require("../controllers/userController");
const router = express.Router();

router.get("/details/:id", controller.showDetails);
router.get("/all", controller.showAll);
router.get("/wishlist", controller.showWishlist);
router.get("/profile", controller.showProfile);
router.get("/cart", controller.showCart);
router.get("/pay", controller.showPay);
router.get("/register", controller.showRegister);
router.get("/", controller.show);

module.exports = router;
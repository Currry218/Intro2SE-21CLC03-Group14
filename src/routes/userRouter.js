const express = require("express");
const controller = require("../controllers/userController");
const router = express.Router();

router.get("/", controller.show);
router.get("/:id", controller.showWishlist);

router.get("/wishlist", controller.showWishlist);
router.get("/profile", controller.showProfile);
router.get("/cart", controller.showCart);
// router.get("/pay", controller.showPay);
router.get("/allbook", controller.showAllBook);

module.exports = router;
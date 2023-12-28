const express = require("express");
const controller = require("../controllers/userController");
const router = express.Router();

router.get("/", controller.show);


router.get("/:id/wishlist", controller.showWishlist);
router.get("/:id/profile", controller.showProfile);
router.get("/:id/cart", controller.showCart);
router.get("/:id/pay", controller.showPay);

module.exports = router;
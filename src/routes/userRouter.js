const express = require("express");
const controller = require("../controllers/userController");
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage(); // You can customize storage as needed
const upload = multer({ storage: storage });

router.get("/details/:id", controller.showDetails);
router.get("/all", controller.showAll);
router.get("/wishlist", controller.showWishlist);
router.get("/profile", controller.showProfile);
router.get("/cart", controller.showCart);
router.get("/pay", controller.showPay);
router.post("/purchase", controller.purchase);
router.post("/search", controller.search);

router.get("/register", controller.showRegister);
router.get("/", controller.show);

router.put("/addcart", controller.addCart);
router.put("/removecart", controller.removeCart);
router.put("/addwishlist", controller.addWishlist);
router.put("/removewishlist", controller.removeWishlist);
router.put("/postcomment", controller.postComment);
// router.post('/comments', (req, res) => {
//     console.log(req.body);
//     const { username, comment, bookId } = req.body;
  
//     // Save the comment to the database
  
//     res.json({ success: true, message: 'Comment added successfully' });
//   });
router.get("/", controller.show);
// router.all('/*', function(req, res) {
//     res.status(404).send('Not Found');
//     console.log("Vao day a");
// });
router.post("/register", upload.single('bookcover'), controller.registerBook);

module.exports = router;



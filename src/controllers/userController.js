const controller = {};

controller.show = (req, res) => {
	// Lay do db
	res.render('homepage_logined', { title: "Homepage" , layout: "userlayout", trangchu: true, id:req.params.id});
}
controller.showWishlist = (req, res) => {
	res.render("wishlist", { title: "Wishlist" , layout: "userlayout", id:id});
};

controller.showProfile = (req, res) => {
	res.render("profile", { title: "Profile" , layout: "userlayout"});
};
controller.showCart = (req, res) => {
	res.render("cart", { title: "Cart" , layout: "userlayout"});
};
controller.showAllBook = (req, res) => {
	res.render("allbook", { title: "All books" , layout: "userlayout"});
};
module.exports = controller;
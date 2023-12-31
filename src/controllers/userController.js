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

controller.editUser = async (req, res) => {
	let{id, username, password, email, balance, imagePath } = req.body;
	try{
		await models.User.update(
		{username, password, email, balance, imagePath,
			isAdmin: isAdmin ? true:false},
		{where: {id}},  
		);
		res.send("User updated");
	} 
	catch(error) {
		res.send("Can not add user");
		console.error(error);
	}

}
module.exports = controller;
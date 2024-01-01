const controller = {};
const models = require("../models");
const Sequelize = require('sequelize');

controller.show = async (req, res) => {
	const newbooks = await models.Book.findAll({
		attributes: [
		  "id",
		  "title",
		  "author",
		  "imagePath",
		  "price",
		  "tags",
		],
		where: {
			isVerified: true
		},
		order: [['updatedAt', 'DESC']], // Sorting by updatedAt in descending order
		limit: 5
	});

	const trendingbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"author",
			"imagePath",
			"price",
			"tags",
		],
		where: {
			isVerified: true
		},
		order: [[Sequelize.literal('ARRAY_LENGTH("buyer", 1)'), 'DESC']],
		limit: 5
	});

	const allbooks = await models.Book.findAll({
		attributes: [
		  "id",
		  "title",
		  "author",
		  "imagePath",
		  "price",
		  "tags",
		],
		where: {
			isVerified: true
		},
		order: [['id', 'DESC']], // Sorting by updatedAt in descending order
		limit: 5
	});

	res.render('user_hp', { title: "Homepage" , layout: "userlayout", trangchu: true, id: res.locals.id, newbooks, trendingbooks, allbooks});
}

controller.showAll = async (req, res) => {
	const allbooks = await models.Book.findAll({
		attributes: [
		  "id",
		  "title",
		  "author",
		  "imagePath",
		  "price",
		  "tags",
		],
		where: {
			isVerified: true
		},
		order: [['id', 'DESC']], // Sorting by updatedAt in descending order
	});
	res.render('allbook', { title: "All", layout: "userlayout", showAll: true, allbooks});
}

controller.showWishlist = async (req, res) => {
	const user = await models.User.findOne({
		attributes: [
			"wishlist",
		],
		where: {
			id: res.locals.id
		}
	});

	const wishlistbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"author",
			"imagePath",
			"price",
			"tags",
		],
		where: {
			id: user.wishlist
		}
	})
	
	res.render("user_wishlist", { title: "Wishlist" , layout: "userlayout", id: res.locals.id, wishlistbooks});
};

controller.showProfile = async (req, res) => {
	const userInfo = await models.User.findOne({
		attributes: [
			"id",
			"username",
			"imagePath",
			"boughtBooks",
		],
		where: {
			id: res.locals.id
		}
	})

	const boughtbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"author",
			"imagePath",
			"price",
			"tags",
		],
		where: {
			id: userInfo.boughtBooks
		}
	})

	const sellingbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"author",
			"imagePath",
			"price",
			"tags",
			"ownerId",
		],
		where: {
			ownerId: userInfo.id,
			isVerified: true
		}
	})

	res.render("user_profile", { title: "Profile" , layout: "userlayout", id: res.locals.id, userInfo, boughtbooks, sellingbooks});
};

controller.showCart = async (req, res) => {
	const user = await models.User.findOne({
		attributes: [
			"cart",
		],
		where: {
			id: res.locals.id
		}
	});

	const cartbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"author",
			"imagePath",
			"price",
			"tags",
		],
		where: {
			id: user.cart
		}
	});

	var totalPrice = 0.0;
	for (var i=0; i<cartbooks.length; i++) {
		totalPrice += parseFloat(cartbooks[i].price);
	}

	res.render("user_cart", { title: "Cart" , layout: "userlayout", cartbooks, totalPrice});
};

controller.showPay = async (req, res) => {
	res.render("user_pay", {title: "Pay", layout: "userlayout", id: res.locals.id});
}

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
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

	res.render('user_hp', { title: "Homepage" , layout: "userlayout", trangchu: true, userid: res.locals.userid, newbooks, trendingbooks, allbooks});
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
	res.render('allbook', { title: "All", layout: "userlayout", showAll: true, userid: res.locals.userid, allbooks});
}

controller.showWishlist = async (req, res) => {
	const user = await models.User.findOne({
		attributes: [
			"wishlist",
		],
		where: {
			id: res.locals.userid
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
	
	res.render("user_wishlist", { title: "Wishlist" , layout: "userlayout", userid: res.locals.userid, wishlistbooks});
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
			id: res.locals.userid
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

	res.render("user_profile", { title: "Profile" , layout: "userlayout", userid: res.locals.userid, userInfo, boughtbooks, sellingbooks});
};

controller.showCart = async (req, res) => {
	const user = await models.User.findOne({
		attributes: [
			"cart",
		],
		where: {
			id: res.locals.userid
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

	res.render("user_cart", { title: "Cart" , layout: "userlayout", userid: res.locals.userid, cartbooks, totalPrice, userid: res.locals.userid});
};

controller.showPay = async (req, res) => {
	const user = await models.User.findOne({
		attributes: [
			"cart",
		],
		where: {
			id: res.locals.userid
		}
	});

	const cartbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"price",
		],
		where: {
			id: user.cart
		}
	});

	var totalPrice = 0.0;
	for (var i=0; i<cartbooks.length; i++) {
		totalPrice += parseFloat(cartbooks[i].price);
	}

	res.render("user_pay", {title: "Pay", layout: "userlayout", userid: res.locals.userid, cartbooks, totalPrice});
}

// controller.editUser = async (req, res) => {
// 	let{id, username, password, email, balance, imagePath } = req.body;
// 	try{
// 		await models.User.update(
// 		{username, password, email, balance, imagePath,
// 			isAdmin: isAdmin ? true:false},
// 		{where: {id}},  
// 		);
// 		res.send("User updated");
// 	} 
// 	catch(error) {
// 		res.send("Can not add user");
// 		console.error(error);
// 	}

// }

controller.showDetails = async (req, res) => {
	if (req.params.id) {
		res.locals.bookid = req.params.id;
	}
	const book = await models.Book.findOne({
		attributes: [
			"id",
			"title",
			"author",
			"imagePath",
			"price",
			"tags",
			"description",
			"filePath",
		],
		where: {
			id: res.locals.bookid
		},
	});

	const reviews = await models.Review.findAll({
		attributes: [
			"content",
			"createdAt",
		],
		where: {
			bookId: book.id
		},
		include: [
			{
				model: models.User,
				attributes: ["username", "imagePath"]
			}
		]
	})

	const user = await models.User.findOne({
		attributes: [
			"username",
			"imagePath",
			"boughtBooks"
		],
		where: {
			id: res.locals.userid
		}
	});

	const tagsArray = Array.isArray(book.tags) ? book.tags : [book.tags];

	const rcm = await models.Book.findAll({
		attributes: [
		"id",
		"title",
		"author",
		"imagePath",
		"price",
		"tags",
		],
		where: {
			tags: {[Sequelize.Op.overlap]: tagsArray,},
			id: {[Sequelize.Op.ne]: book.id,},
		},
		limit: 5,
	});	

	if (user.boughtBooks.includes(book.id)) {
		res.render("productpage", {title: "Product", layout: "userlayout", userid: res.locals.userid, book, bookid: res.locals.bookid, reviews, user, showlink: true});
	} else {
		res.render("productpage", {title: "Product", layout: "userlayout", userid: res.locals.userid, book, bookid: res.locals.bookid, reviews, user});
	}	
}

controller.showRegister = (req, res) => {
	res.render("user_register", { title: "Register Book", layout: "userlayout", userid: res.locals.userid});
}
controller.Purchase = async (req, res) => {
	// let {payment, money} = req.body;
	// console.log(payment, money);
	// console.log(req.body);
	// console.log(req.query);

	res.redirect("/" + res.locals.userid);
}
controller.addCart = async (req, res) => {
	let { id } = req.body;
	let userid = res.locals.userid;

	const user = await models.User.findOne({
		attributes: [
			"cart",
			"boughtBooks",
		],
		where: {
			id: userid
		}
	});

	console.log(user.cart);
	console.log(user.boughtBooks);
	if (user.cart.includes(parseInt(id)) || user.boughtBooks.includes(parseInt(id))) {
		// console.log("already there");
	} else {
		user.cart.push(parseInt(id));
		console.log("After: " + user.cart);
		try {
			await models.User.update(
			  { cart : user.cart },
			  { where: {id: userid} }
			);
		  //   res.send("Book added!");
			return res.redirect("/" + userid + "/details/" + id);
		} catch (error) {
		  //   res.send("Can not add book!");
			console.error(error);
			return res.redirect("/" + userid + "/details/" + id);
		}

	}
}

controller.removeCart = async (req, res) => {
	let { id } = req.body;
	let userid = res.locals.userid;

	const user = await models.User.findOne({
		attributes: [
			"cart",
			"boughtBooks",
		],
		where: {
			id: userid
		}
	});

	console.log(user.cart);
	console.log(user.boughtBooks);
	if (user.cart.includes(parseInt(id))) {
		user.cart.splice(user.cart.indexOf(parseInt(id)), 1);
		console.log("After: " + user.cart);
		try {
			await models.User.update(
			  { cart : user.cart },
			  { where: {id: userid} }
			);
		  //   res.send("Book added!");
			return res.redirect("/" + userid + "/details/" + id);
		} catch (error) {
		  //   res.send("Can not add book!");
			console.error(error);
			return res.redirect("/" + userid + "/details/" + id);
		}
	} else {

	}
}

controller.addWishlist = async (req, res) => {
	let { id } = req.body;
	let userid = res.locals.userid;

	const user = await models.User.findOne({
		attributes: [
			"wishlist",
		],
		where: {
			id: userid
		}
	});

	if (user.wishlist.includes(parseInt(id))) {
		// console.log("already there");
	} else {
		user.wishlist.push(parseInt(id));
		try {
			await models.User.update(
			  { wishlist : user.wishlist },
			  { where: {id: userid} }
			);
		  //   res.send("Book added!");
			return res.redirect("/" + userid + "/details/" + id);
		} catch (error) {
		  //   res.send("Can not add book!");
			console.error(error);
			return res.redirect("/" + userid + "/details/" + id);
		}

	}
}

controller.removeWishlist = async (req, res) => {
	let { id } = req.body;
	let userid = res.locals.userid;

	const user = await models.User.findOne({
		attributes: [
			"wishlist",
		],
		where: {
			id: userid
		}
	});

	if (user.wishlist.includes(parseInt(id))) {
		user.wishlist.splice(user.wishlist.indexOf(id), 1);
		try {
			await models.User.update(
			  { wishlist : user.wishlist },
			  { where: {id: userid} }
			);
		  //   res.send("Book added!");
			return res.redirect("/" + userid + "/details/" + id);
		} catch (error) {
		  //   res.send("Can not add book!");
			console.error(error);
			return res.redirect("/" + userid + "/details/" + id);
		}
	} else {

	}
}

controller.registerBook = async (req, res) => {
	const { buffer } = req.file;
	// const dataString = buffer.toString('base64'); // Convert buffer to base64-encoded string
	// const imgSrc = `data:image/${req.file.mimetype};base64,${dataString}`;
	// res.render("temp", {title: "Product", layout: "userlayout", imgSrc});

    // if (!bookCover) {
    //     // return res.status(400).send('No file uploaded.');
    // }
	const tags = Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags];
	const isVerified = false;
	let {title, filePath, price, description} = req.body;
	let ownerId = res.locals.userid;

	try {
		await models.Book.create({title, ownerId, filePath, price, description, isVerified, tags, imgData: buffer});
		return res.redirect("/" + res.locals.userid + "/profile");
	} catch (error) {
		console.error(error);
		return res.redirect("/" + res.locals.userid + "/");
	}
}
controller.postComment = async (req, res) => {
    let {id, content} = req.body;
    console.log(id, content);
	await models.Review.create({ userId: res.locals.userid, bookId: id, content: content});
	// Sua sau
	// return res.redirect("/" + res.locals.userid + "/details/" + id);
    
}


module.exports = controller;
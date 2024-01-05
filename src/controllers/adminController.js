const controller = {};
const models = require("../models");
const Sequelize = require('sequelize');

const mimeType = 'image/jpg';
const toImg = function (buffer, mimetype) {
    return `data:image/${mimetype};base64,${buffer.toString('base64')}`;
};
function convertOne(book) {
	if (book.imgData) {
		book.imagePath = toImg(book.imgData, mimeType);
	} else {
		book.imagePath = null;
	}
}
function convertAll(books) {
	for (const book of books) {
		if (book.imgData) {
			book.imagePath = toImg(book.imgData, mimeType);
		} else {
			book.imagePath = null;
		}
	}
}

controller.show = async (req, res) => {
	const newbooks = await models.Book.findAll({
		attributes: [
		  "id",
		  "title",
		  "author",
		  "imgData",
		  "price",
		  "tags",
		],
		where: {
			isVerified: true
		},
		order: [['updatedAt', 'DESC']], // Sorting by updatedAt in descending order
		limit: 5
	});
	convertAll(newbooks);

	const trendingbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"author",
			"imgData",
			"price",
			"tags",
		],
		where: {
			isVerified: true
		},
		order: [[Sequelize.literal('ARRAY_LENGTH("buyer", 1)'), 'DESC']],
		limit: 5
	});
	convertAll(trendingbooks);

	const allbooks = await models.Book.findAll({
		attributes: [
		  "id",
		  "title",
		  "author",
		  "imgData",
		  "price",
		  "tags",
		],
		where: {
			isVerified: true
		},
		order: [['id', 'DESC']], // Sorting by updatedAt in descending order
		limit: 5
	});
	convertAll(allbooks);

	res.render('admin_hp', { title: "Homepage" , layout: "adminlayout", trangchu: true, newbooks, trendingbooks, allbooks});
}

controller.showAll = async (req, res) => {
	const allbooks = await models.Book.findAll({
		attributes: [
		  "id",
		  "title",
		  "author",
		  "imgData",
		  "price",
		  "tags",
		],
		where: {
			isVerified: true
		},
		order: [['id', 'DESC']], // Sorting by updatedAt in descending order
	});
	convertAll(allbooks);

	res.render('admin_allbook', { title: "All", layout: "adminlayout", showAll: true, allbooks});
}

controller.showDetails = async (req, res) => {
	if (req.params.id) {
		res.locals.bookid = req.params.id;
	}
	const book = await models.Book.findOne({
		attributes: [
			"id",
			"title",
			"author",
			"imgData",
			"price",
			"tags",
			"description",
		],
		where: {
			id: res.locals.bookid
		},
	});
	convertOne(book);

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
		],
		where: {
			id: res.locals.user.id
		}
	});
	
	res.render("productpage", {title: "Product", layout: "adminlayout", book, reviews, user});
}

controller.showWaitlist = async (req, res) => {
	const waitingbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"owner",
			"author",
			"imgData",
			"price",
			"description",
			"tags",
		],
		where: {
			isVerified: false
		}
	})
	convertAll(waitingbooks);

	res.render('admin_waitlist', { title: "Waiting Posts", layout: "adminlayout", waitlist: true, waitingbooks});
}

controller.showReportBook = async (req, res) => {
	const reportlists = await models.Report.findAll({
		attributes: [
		  "id",
		  "userId",
		  "reportedBookId",
		  "content",
		],
		where: {
			isBook: true
		},
		include: [
			{
				model: models.User,
				// as: 'ReportedUser',
				attributes: ["username"]
			},
			{
				model: models.Book,
				attributes: ["id", "title", "author", "imgData", "price"]
			}
		]
	});
	for (const rp of reportlists) {
		convertOne(rp.Book);
	}
	

	res.render('admin_rpbook', { title: "Books Management", layout: "adminlayout", rpbook: true, reportlists});
}

controller.showReportAcc = async (req, res) => {
	const reportlists = await models.Report.findAll({
		attributes: [
		  "id",
		  "userId",
		  "reportedUserId",
		  "content",
		],
		where: {
			isBook: false
		},
		include: [
			{
				model: models.User,
				as: 'ReportedUser',
				attributes: ["username", "imagePath"]
			},
			{
				model: models.User,
				// as: 'ReportedUser',
				attributes: ["username"]
			}
		]
	});

	res.render('admin_rpacc', { title: "Accounts Management", layout: "adminlayout", rpacc: true, reportlists});
}

controller.showProfile = async (req, res) => {
	
	const userInfo = await models.User.findOne({
		attributes: [
			"id",
			"username",
			"imagePath",
			"boughtBooks",
		],
		where: {
			id: req.params.id
		}
	})

	const boughtbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"author",
			"imgData",
			"price",
			"tags",
		],
		where: {
			id: userInfo.boughtBooks
		}
	})
	convertAll(boughtbooks);

	const sellingbooks = await models.Book.findAll({
		attributes: [
			"id",
			"title",
			"author",
			"imgData",
			"price",
			"tags",
			"ownerId",
		],
		where: {
			ownerId: userInfo.id,
			isVerified: true
		}
	})
	convertAll(sellingbooks);

	res.render("user_profile", { title: "Profile" , layout: "userlayout", userid: req.params.id, userInfo, boughtbooks, sellingbooks});
}

controller.updateBook = async (req, res) => {
	let { id } = req.body;
	try {
	  await models.Book.update(
		{ isVerified: true },
		{ where: {id} }
	  );
	//   res.send("Book added!");
	  return res.redirect("admin/");
	} catch (error) {
	//   res.send("Can not add book!");
	  console.error(error);
	  return res.redirect("/admin/waitlist");
	}
}

controller.deleteBook = async (req, res) => {
	let { id } = req.body;
	try {
		await User.update(
			{
			  wishlist: sequelize.literal(`array_remove("wishlist", '${id}')`),
			  cart: sequelize.literal(`array_remove("cart", '${id}')`),
			  boughtBooks: sequelize.literal(`array_remove("boughtBooks", '${id}')`),
			}
		);
		await models.Book.destroy({ where: {id} });
		// res.send("Removed register request!");
		return res.redirect("/admin/waitlist");
	  } catch (error) {
		// res.send("Can not remove register request!");
		console.error(error);
		return res.redirect("/admin/waitlist");
	  }
}

controller.deleteReport = async (req, res) => {
	let { id } = req.body;
	try {
		await models.Report.destroy({ where: {id} });
		// res.send("Removed register request!");
		return res.redirect("/admin/waitlist");
	  } catch (error) {
		// res.send("Can not remove register request!");
		console.error(error);
		return res.redirect("/admin/waitlist");
	  }
}
controller.deleteReview = async (req, res) => {
	let { id } = req.body;
	try {
		await Book.update(
			{
			  reviews: sequelize.literal(`array_remove("reviews", '${id}')`),
			}
		);

		await models.Review.destroy({ where: {id} });
		// res.send("Removed register request!");
		return res.redirect("/admin/waitlist");
	  } catch (error) {
		// res.send("Can not remove register request!");
		console.error(error);
		return res.redirect("/admin/waitlist");
	  }
}

controller.deleteUser = async (req, res) => {
	let { id } = req.body;
	console.log(id);
	try {
		await Book.update(
			{ ownerId: 1},
			{ where: { ownerId: id } 
		});
		await models.User.destroy({ where: {id} });
		// res.send("Removed register request!");
		return res.redirect("/admin/waitlist");
	  } catch (error) {
		// res.send("Can not remove register request!");
		console.error(error);
		return res.redirect("/admin/waitlist");
	  }
}
controller.search = async (req, res) => {
    let {search} = req.body;
    let books = await models.Book.findAll({
		attributes: [
		  "id",
		  "title",
		  "author",
		  "imgData",
		  "price",
		  "tags",
		],
		where: {
			title: {[Sequelize.Op.iLike]: Sequelize.fn('LOWER', Sequelize.literal(`'%${search.toLowerCase()}%'`)),}
		},

		order: [['updatedAt', 'DESC']], // Sorting by updatedAt in descending order
		limit: 5
	});
	convertAll(books);
	res.render('admin_searchbook', { title: "Search" , layout: "userlayout", trangchu: false, userid: res.locals.userid, search, books});
}
module.exports = controller;
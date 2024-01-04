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

	res.render('admin_hp', { title: "Homepage" , layout: "adminlayout", trangchu: true, newbooks, trendingbooks, allbooks});
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
	res.render('allbook', { title: "All", layout: "adminlayout", showAll: true, allbooks});
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
			"imagePath",
			"price",
			"tags",
			"description",
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
			"imagePath",
			"price",
			"description",
			"tags",
		],
		where: {
			isVerified: false
		}
	})
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
				attributes: ["id", "title", "author", "imagePath", "price"]
			}
		]
	});

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

module.exports = controller;
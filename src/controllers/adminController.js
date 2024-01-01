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
	const reportlists = await Report.findByPk(id, {
		include: [
		  { model: User, as: 'reportedUser' },
		  { model: Book, as: 'reportedBook' }
		]
	  });
	// const reportlists = await models.Report.findAll({
	// 	attributes: [
	// 	  "id",
	// 	  "userId",
	// 	  "reportedBookId",
	// 	  "content",
	// 	],
	// 	where: {
	// 		isBook: true
	// 	},
	// 	include: [
	// 		{
	// 			model: models.User,
	// 			attributes: ["username"]
	// 		},
	// 		{
	// 			model: models.Book,
	// 			attributes: ["id", "title", "author", "imagePath", "price"]
	// 		}
	// 	]
	// });
	console.log(reportlists);
	res.render('admin_rpbook', { title: "Books Management", layout: "adminlayout", rpbook: true, reportlists});
}

controller.showReportAcc = async (req, res) => {
	const rpAccInfo = await models.Report.findAll({
		attributes: [
		  "id",
		  "userId",
		  "reportedId",
		  "content",
		],
		where: {
			isBook: false
		},
		include: [
			{ 
				model: models.User,
				attributes: ["username"]
			}
		]
	});

	res.render('admin_rpacc', { title: "Accounts Management", layout: "adminlayout", rpacc: true, rpAccInfo});
}

controller.addUser = async (req, res) => {
	let{username, password, email, balance, imagePath} = req.body;
	try {
		await models.User.create({
			username, password, email, balance, imagePath,
			isAdmin: isAdmin ? true:false,
		});
		res.redirect("/users"); //NHO SUA
	} catch(error) {
		res.send("Can not add user");
		console.error(error);
	}
}
controller.deleteUser = async (req, res) => {
	let id = isNaN(req.params.id) ? 0: parseInt(req.params.id);
	try{
		await models.User.destroy({where: {id}});
		res.send("User deleted!");

	} catch (error){
		res.send("Can not delete user");
		console.error(error);
	}
}
controller.addBook = async (req, res) => {
	let{title,owner,ownerId,author,imagePath,price,tags,description} = req.body;
	try {
		await models.Book.create({
			title,owner,ownerId,author,imagePath,price,tags,description,
		});
		res.redirect("/Books"); //NHO SUA
	} catch(error) {
		res.send("Can not add Book");
		console.error(error);
	}
}
controller.editBook = async (req, res) => {
	let{id, title,owner,ownerId,author,imagePath,price,tags,description}= req.body;
	try{
		await models.Book.update(
			{title,owner,ownerId,author,imagePath,price,tags,description},
			{where: {id}},  
		);
		res.send("Book updated");
	} 
	catch(error) {
		res.send("Can not add Book");
		console.error(error);
	}

}
controller.deleteBook = async (req, res) => {
	let id = isNaN(req.params.id) ? 0: parseInt(req.params.id);
	try{
		await models.Book.destroy({where: {id}});
		res.send("Book deleted!");

	} catch (error){
		res.send("Can not delete Book");
		console.error(error);
	}
}


module.exports = controller;
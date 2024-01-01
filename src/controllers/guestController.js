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

	res.render('guest_hp', { title: "Homepage" , layout: "guestlayout", homepage: true, newbooks, trendingbooks, allbooks});
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
	res.render('allbook', { title: "All", layout: "guestlayout", showAll: true, allbooks});
}

module.exports = controller;
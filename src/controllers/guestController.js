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

	res.render('guest_hp', { title: "Homepage" , layout: "guestlayout", homepage: true, newbooks, trendingbooks, allbooks});
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
	
	res.render('allbook', { title: "All", layout: "guestlayout", showAll: true, allbooks});
}

module.exports = controller;
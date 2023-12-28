const controller = {};

controller.show = (req, res) => {
	res.render('homepage', { title: "Trang chủ" , layout: "guestlayout", trangchu: true});
}

module.exports = controller;
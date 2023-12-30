const controller = {};

controller.show = (req, res) => {
	// Lay do db
	res.render('homepage_logined', { title: "Trang chủ" , layout: "userlayout", trangchu: true});
}


module.exports = controller;
const controller = {};

controller.show = (req, res) => {
	// Lay do db
	res.render('homepage_logined', { title: "Trang chủ" , trangchu: true});
}


module.exports = controller;
const controller = {};

controller.show = (req, res) => {
	res.render('homepage_admin', { title: "Trang chủ" , trangchu: true});
	// res.render()
}

module.exports = controller;
const controller = {};

controller.show = (req, res) => {
	// Lay do db
	res.render('index', { title: "Trang chủ" , trangchu: true});
}


module.exports = controller;
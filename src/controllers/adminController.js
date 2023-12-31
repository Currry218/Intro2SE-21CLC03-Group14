const controller = {};

controller.show = (req, res) => {
	res.render('admin_hp', { title: "Homepage" , layout: "adminlayout", trangchu: true});
	// res.render()
}

controller.showReportAcc = (req, res) => {
	res.render('admin_rpacc', { title: "Accounts Management", layout: "adminlayout", rpacc: true});
}

controller.showReportBook = (req, res) => {
	res.render('admin_rpbook', { title: "Books Management", layout: "adminlayout", rpbook: true});
}

controller.showWaitlist = (req, res) => {
	res.render('admin_waitlist', { title: "Waiting Posts", layout: "adminlayout", waitlist: true});
}

module.exports = controller;
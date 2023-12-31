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
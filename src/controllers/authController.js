const controller = {};
const User = require("../models").User;

controller.showLogin = (req, res) => {
    let reqUrl = req.query.reqUrl ? req.query.reqUrl : "/";
    if (req.session.user) {
        return res.redirect(reqUrl);
    }
    res.render("login", { 
        layout: "guestlayout",
		title: "Login" , 
		login: true,
    reqUrl,
    });
};

controller.login = async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({
        attributes: [ "id", "username", "password", "email", "balance", "isAdmin"],
        where: { email, password },
    });
    
    if (user) {
        let reqUrl = req.body.reqUrl ? req.body.reqUrl : "/";

        if (user.isAdmin == true) {
            reqUrl = "/admin";
        } else {
            reqUrl = `/${user.id}`;
        }

        req.session.user = user;
        return res.redirect(reqUrl);
    }
    return res.render("login", {
        layout: "guestlayout",
        message: "Wrong username or password!",
    });
};

// controller.userLoggedIn = async (req, res, next) => {

// };

controller.userLoggedIn = async (req, res, next) => {
    if (req.session.user) {
        const user = req.session.user;
        if (user.isAdmin == false) {
            res.locals.user = user;
            return next();
        }
    }
    res.redirect(`/login?reqUrl=${req.originalUrl}`);
};

controller.adminLoggedIn = async (req, res, next) => {
    if (req.session.user) {
        const user = req.session.user;
        if (user.isAdmin == true) {
            res.locals.user = user;
            return next();
        }
    }
    res.redirect(`/login?reqUrl=${req.originalUrl}`);
};

controller.logout = async (req, res, next) => {
    req.session.destroy(function(error) {
        if (error) return next(error);
        res.redirect("/login");
    });
};

module.exports = controller;
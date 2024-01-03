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
    let reqUrl = req.body.reqUrl ? req.body.reqUrl : "/";
    let user = await User.findOne({
        attributes: [ "id", "username", "password", "email", "balance", "isAdmin"],
        where: { email, password },
    });
    
    if (user) {
        if (reqUrl=="/" && user.isAdmin == true) {
            reqUrl = "/admin";
        } else if (reqUrl=="/" && user.isAdmin == false) {
            reqUrl = `/${user.id}`;
        }

        req.session.user = user;
        return res.redirect(reqUrl);
    }
    return res.render("login", {
        layout: "guestlayout",
        message: "Wrong username or password!",
        reqUrl,
    });
};

controller.showSignup = (req, res) => {
    res.render("signup", {
        layout: "guestlayout",
    });
}

controller.signup = async (req, res) => {
    let { username, email, password, isAdmin} = req.body;
    isAdmin = isAdmin === 'on';
    try {
        const userfound = await User.findOne({
            attributes: ["id", "email"],
            where: {email},
        });

        if (!userfound) {
            await User.create({ username, password, email, isAdmin});
            return res.render("login", {
                layout: "guestlayout",
                message: "You can now login using your registration!",
            });
        } else {
            return res.render("/signup", {
                layout: "guestlayout",
                message: "Account with the given email existed!",
            });
        }
        
    } catch (error) {
      console.error(error);
      return res.render("signup", {
        layout: "guestlayout",
        message: "Can not register new account!",
      });
    }
}

controller.loggedIn = async (req, res, next) => {
    if (req.session.user) {
        const user = req.session.user;
        if (user.isAdmin == true) {
            res.locals.user = user;
            return res.redirect("/admin");
        } else {
            res.locals.user = user;
            res.locals.userid = req.params.id;
            return res.redirect(`/${user.id}`);
        }
    }
    return next();
};

controller.userLoggedIn = async (req, res, next) => {
    if (req.session.user) {
        const user = req.session.user;
        if (user.isAdmin == false && user.id == req.params.id) {
            res.locals.user = user;
            res.locals.userid = req.params.id;
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
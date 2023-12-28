const controller = {};
const Account = require("../models").Account;

controller.showLogin = (req, res) => {
    let accounts = Account.findAll();
    console.log(accounts);
    let reqUrl = req.query.reqUrl ? req.query.reqUrl : "/";
    // if (req.session.account) {
    //     return res.redirect(reqUrl);
    // }
    res.render("login", { 
        layout: "guestlayout",
		title: "Login" , 
		login: true,
    reqUrl,
    });
};

controller.login = async (req, res) => {
    let { email, password } = req.body;
    let account = await Account.findOne({
        attributes: [ "username", "password", "email", "balance", "isAdmin"],
        where: { email, password },
        // include: [{ model: LoaiTaiKhoan, attributes: ["HoTen"] }]
    });
    if (account) {
        let reqUrl = req.body.reqUrl ? req.body.reqUrl : "/";

        if (account.isAdmin == true) {
            reqUrl = `/admin`;
        }
        if (account.isAdmin == false) {
            reqUrl = `${account.username.toLowerCase()}`;
        }
        // if (account.LoaiTaiKhoanId && account.LoaiTaiKhoan.HoTen) {
        //     reqUrl = `/${account.LoaiTaiKhoan.HoTen.toLowerCase()}`;
        // }

        req.session.account = account;
        return res.redirect(reqUrl);
    }
    return res.render("login", {
        layout: "guestlayout",
        message: "Sai tên tài khoản hoặc mật khẩu!",
    });
};

// controller.daDangNhap = async (req, res, next) => {
//     if (req.session.taikhoan) {
//         res.locals.taikhoan = req.session.taikhoan;
//         return next();
//     }
//     res.redirect(`/dangnhap?reqUrl=${req.originalUrl}`)
// };

// controller.phuongDaDangNhap = async (req, res, next) => {
//     if (req.session.taikhoan) {
//         const taikhoan = req.session.taikhoan;
//         if (taikhoan.LoaiTaiKhoanId) {
//             const loaitaikhoan = await LoaiTaiKhoan.findOne({
//                 where: { id: taikhoan.id, HoTen: "Phuong" },
//             });

//             if (loaitaikhoan && taikhoan.LoaiTaiKhoanId === loaitaikhoan.id) {
//                 res.locals.taikhoan = taikhoan;
//                 return next();
//             }
//         }
//     }
//     res.redirect(`/dangnhap?reqUrl=${req.originalUrl}`)
// };

// controller.quanDaDangNhap = async (req, res, next) => {
//     if (req.session.taikhoan) {
//         const taikhoan = req.session.taikhoan;
//         if (taikhoan.LoaiTaiKhoanId) {
//             const loaitaikhoan = await LoaiTaiKhoan.findOne({
//                 where: { id: taikhoan.id, HoTen: "Quan" },
//             });

//             if (loaitaikhoan && taikhoan.LoaiTaiKhoanId === loaitaikhoan.id) {
//                 res.locals.taikhoan = taikhoan;
//                 return next();
//             }
//         }
//     }
//     res.redirect(`/dangnhap?reqUrl=${req.originalUrl}`)
// };

// controller.soDaDangNhap = async (req, res, next) => {
//     if (req.session.taikhoan) {
//         const taikhoan = req.session.taikhoan;
//         if (taikhoan.LoaiTaiKhoanId) {
//             const loaitaikhoan = await LoaiTaiKhoan.findOne({
//                 where: { id: taikhoan.id, HoTen: "So" },
//             });

//             if (loaitaikhoan && taikhoan.LoaiTaiKhoanId === loaitaikhoan.id) {
//                 res.locals.taikhoan = taikhoan;
//                 return next();
//             }
//         }
//     }
//     res.redirect(`/dangnhap?reqUrl=${req.originalUrl}`)
// };

// controller.dangXuat = async (req, res, next) => {
//     req.session.destroy(function(error) {
//         if (error) return next(error);
//         res.redirect("/dangnhap");
//     });
// };

module.exports = controller;
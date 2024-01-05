const express = require("express");
const app = express();
const port = 4000 || process.env.PORT;
const expressHbs = require("express-handlebars");
const paginate = require('express-handlebars-paginate');

const session = require("express-session");

app.use(express.static(__dirname +"/html"));

// Handle file uploading
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./upload");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

const uploadStorage = multer({ storage: storage });

app.post("/fileupload", uploadStorage.single("file"), (req, res) => {
	console.log(req.file);    
	return res.send("Upload successfully!");
});

app.get('/fileupload/display', function(req, res, next) {
    const folder = './upload/';

    fs.readdirSync(folder).forEach(file => {
        // console.log(file);

        var stream = fs.createReadStream(folder + file);
        var filename = file;

        filename = encodeURIComponent(filename);

        res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
        res.setHeader('Content-type', 'application/pdf');

        stream.pipe(res);
    });
});

// End of handling file upload


app.engine(
    "hbs",
    expressHbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir:__dirname +"/views/partials",
        extname:"hbs",
        defaultLayout: "guestlayout",
		runtimeOptions: {       
			allowProtoPropertiesByDefault: true,     
		}, 
		helpers: {   
			toFixed: function (value, decimals) {
				return parseFloat(value).toFixed(decimals);
			},    
			showDate: (date) => {          
				return date.toLocaleDateString(
					'en-US', {           
						year: 'numeric',           
						month: 'long',           
						day: 'numeric',         
					});       
			},
			paginateHelper: paginate.createPagination, 
			},   
		}),
);
app.set("view engine","hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
	session({
	  secret: "SESSION_SECRET",
	  resave: false,
	  saveUninitialized: false,
	  cookie: {
		secure: false,  // if true only transmit cookie over https
		httpOnly: true, // prevent client side JS from reading the cookie
		maxAge: 20 * 60 * 1000, // 20 minutes
	  },
	})
);

app.use("/", require("./routes/authRouter"));
// app.use("/", require("./routes/userRouter"));
// app.use("/admin", require("./routes/adminRouter"));

app.listen(port,() => console.log(`Example app listening on port ${port}`));

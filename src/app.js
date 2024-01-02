const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const expressHbs = require("express-handlebars");
const paginate = require('express-handlebars-paginate');

const session = require("express-session");

app.use(express.static(__dirname +"/html"));


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
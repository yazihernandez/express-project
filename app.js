const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true})); 
app.set("view engine", "ejs");
app.use(express.static("public"));

//Routes ----------------------------------------------------------------

//1.Home page ----------------------------------------------------------------
app.get("/", function (req, res) {
	res.render("home", {
		path: "/",
        title: "Home",
		intro: "I'm Yazi, a Fullstack Developer. Welcome to my Page!",
		about: "Click to Learn more on what I can do",
		contact: "Click to inquire more",
	});
});

//2.About page ----------------------------------------------------------------
app.get("/about", function (req, res) {
	res.render("about", {
		path: "/about",
		title: "About Me",
		about: "Hi, I am Yazi, a full-stack developer proficient in HTML, CSS, JavaScript, MySQL, MongoDB, PostgreSQL, Express.js, and Node.js. With a passion for crafting seamless user experiences and robust backend functionalities, I thrive in collaborative environments and continuously seek opportunities to learn and grow. Let's connect and bring your web development ideas to life.",
	});
});

//.3 Contact Page --------------------------------------------------------------
app.get("/contact", function (req, res) {
	res.render("contact", {
		path: "/contact",
		title: "Contact Page",
		type: ["string", "email"],
		placeholder: ["John Doe", "name@example.com"],
		formTitles: ["Name", "Email address"],
	});
});

//Connect to PORT server --------------------------------
app.listen(3000, function () {
	console.log("Server is running on port 3000");
}); // Listen to port 3000
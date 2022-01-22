const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers")
const port = process.env.PORT || 3000;

// Paths start
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// Paths end

// to use post method and get input from form this is req
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path); //to change path of view folder
hbs.registerPartials(partials_path)


/*Get requests Start*/

app.get("/", (req, res) => {
  res.render("index");
})
app.get("/register", (req, res) => {
  res.render("register");
})
app.get("/login", (req, res) => {
  res.render("login");
})

/*Get requests End*/
/*post requests Start*/

app.post("/register", async (req, res) => {
  try {
    console.log(req.body.first_name);
    res.send(req.body.first_name);
  }
  catch {
    response.status(400).send(error);
  }
})

/*post requests End*/

app.listen(port, () => {
  console.log(`server is up and running on ${port}`)
})
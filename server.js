
const express = require('express');
const session = require('express-session');
const db = require('./config/connection');
const routes = require('./routes');
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, "viewercenter", "build")))

app.get("/SignIn", (req, res) => {  
  res.sendFile(path.join(__dirname, "viewercenter", "build", "index.html"));
});

app.get("/SignUp", (req, res) => {  
  res.sendFile(path.join(__dirname, "viewercenter", "build", "index.html"));
});

app.get("/Logout", (req, res) => {  
  res.sendFile(path.join(__dirname, "viewercenter", "build", "index.html"));
});

app.get("/PostVideo", (req, res) => {  
  res.sendFile(path.join(__dirname, "viewercenter", "build", "index.html"));
});

app.use(routes);

db.once('open', () => {

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

const express = require("express");
const md5 = require("md5");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.listen(5000, function () {
  console.log("server straed on port 5000");
});

//Cookie
const cookieparser = require("cookie-parser");
app.use((req, res, next) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});
app.use(cookieparser());

//MongoDB Altas Connection
const mongoose = require("mongoose");

const dburl =
  "mongodb+srv://staion1504:aCYw1ZQ3wVZY7ku4@cluster0.xjrpfdo.mongodb.net/SAYS?retryWrites=true&w=majority";


mongoose
  .connect(dburl, {})
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log("Failed to connect to mongodb");
  });




const userinfo = require("./Models/user/signup");
const theatresignupinfo = require("./Models/theatre/signup");


app.post("/login", function (req, res) {

  let email = req.body.email;
  let password = md5(req.body.password);
 

  userinfo.find({ email: email, LoginPassword: password }).then((value) => {
    if (value.length == 0) {
      res.json({
        result:"error",
      });
    } else {

      console.log("User Login success");
      res.cookie("UserReferenceNumber", value[0].UserReferenceNumber);
      if (email == "saysadmin@gmail.com") {
        res.json("adminhome");
      }
      else
        res.json({
          result: "home",
          UserReferenceNumber: value[0].UserReferenceNumber
        });
    }
  });
});


app.post("/Tlogin", function (req, res) {

  let email = req.body.email;
  let License_Number = req.body.License;
  let password = md5(req.body.password);


  theatresignupinfo
    .find({
      temail: email,
      licensenum: License_Number,
      LoginPassword: password,
    })
    .then((value) => {
      // console.log(value);

      if (value.length == 0) {
        res.json({
          result:"error",
        });
      } else {
        console.log("TLogin success");
        res.cookie("currtheatrereffnum", value[0].tReferenceNumber);
        let k =
          value[0].city.charAt(0).toUpperCase() +
          value[0].city.slice(1).toLowerCase();
          res.json({
            result: "theatre",
            currtheatrereffnum: value[0].tReferenceNumber,
            currtheatrecity:k   
          });
        
      }
    });
});
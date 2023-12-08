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







//LOGIN
const userinfo = require("./Models/user/signup");
const theatresignupinfo = require("./Models/theatre/signup");
//ADMIN SIDE
const movieinfo = require("./Models/theatre/movieinfo");
const rentalmovieinfo = require("./Models/theatre/rentalmovieslist");


app.post("/login", function (req, res) {

  let email = req.body.email;
  let password = md5(req.body.password);


  userinfo.find({ email: email, LoginPassword: password }).then((value) => {
    if (value.length == 0) {
      res.json({
        result: "error",
      });
    } else {

      console.log("User Login success");
      res.cookie("UserReferenceNumber", value[0].UserReferenceNumber);
      if (email == "saysadmin@gmail.com") {
        res.json({
          result: "adminhome"
        }
        );
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
          result: "error",
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
          currtheatrecity: k
        });

      }
    });
});




//Admin side


app.get("/Adminmovies", async function (req, res) {
  let rentalmoviearr = await movieinfo.find({});
  let value1 = await rentalmovieinfo.find({});
  let rentalmovieslocarr = [];
  for (let i = 0; i < value1.length; i++) {
    if (!rentalmovieslocarr.includes(value1[i]["city"])) {
      rentalmovieslocarr.push(value1[i]["city"]);
    }
  }

  res.json({
    rentalmoviearr: rentalmoviearr,
    rentalmovieslocarr: rentalmovieslocarr,
  });
});

app.post("/adminrentalmovieinfo", async function (req, res) {
  let mName = req.body.mName;
  let theatreimgurl = req.body.theatreimgurl;
  let lang = req.body.lang;
  let rd = req.body.rd;
  let duration = req.body.duration;
  let genre = req.body.genre;
  let locs = req.body.locs;
  let cn1 = req.body.cn1;
  let cimg1 = req.body.cimg1;
  let cn2 = req.body.cn2;
  let cimg2 = req.body.cimg2;
  let cn3 = req.body.cn3;
  let cimg3 = req.body.cimg3;
  let cn4 = req.body.cn4;
  let cimg4 = req.body.cimg4;
  let cn5 = req.body.cn5;
  let cimg5 = req.body.cimg5;
  let aboutmovie = req.body.about;
  let mid = "SAYS@" + mName;

  let value = await movieinfo.find({ MovieId: mid });
  if (value.length == 0) {
    let newdocument = new movieinfo();
    newdocument.MovieName = mName;
    newdocument.MovieId = mid;
    newdocument.imgurl = theatreimgurl;
    newdocument.releasedate = rd;
    newdocument.duration = duration;
    newdocument.genre = genre;
    newdocument.about = aboutmovie;
    newdocument.language = lang;
    let castobjarr = [
      {
        castname: cn1,
        castimg: cimg1,
      },

      {
        castname: cn2,
        castimg: cimg2,
      },

      {
        castname: cn3,
        castimg: cimg3,
      },

      {
        castname: cn4,
        castimg: cimg4,
      },

      {
        castname: cn5,
        castimg: cimg5,
      },
    ];

    newdocument.cast = castobjarr;
    let value2 = await newdocument.save();
    if (value2) {
      console.log("New Document Added to movie info with data");
    }
  }

  let locsarr = locs.split(",");
  for (let i = 0; i < locsarr.length; i++) {
    locsarr[i] =
      locsarr[i].charAt(0).toUpperCase() + locsarr[i].slice(1).toLowerCase();
  }

  let rentalarrobj = [];
  for (let i = 0; i < locsarr.length; i++) {
    let obj1 = {
      MovieId: mid,
      MovieName: mName,
      city: locsarr[i],
    };

    rentalarrobj.push(obj1);
  }

  let value3 = await rentalmovieinfo.insertMany(rentalarrobj);
  if (value3) {
    console.log("Rental movies inserted ");
  }

  res.json("added");
});




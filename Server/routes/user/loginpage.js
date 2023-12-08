const express = require("express");
const router = express.Router();
const md5 = require("md5");
//database
const userinfo = require("../../models/user/signup");




router.post("/", function (req, res) {
 
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
        })
      }
      else
        res.json({
          result: "home",
          UserReferenceNumber: value[0].UserReferenceNumber
        });
    }
  });
});

module.exports = router;

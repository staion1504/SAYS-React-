const express = require("express");
const router = express.Router();
const premiumclients = require("../user/Common/premiumclients");

//Database
const theatresignupinfo = require("../../models/theatre/signup");

router.get("/", function (req, res) {  
      res.json({ premiumclients: premiumclients });
  });

router.get("/getsuggestion", async (req, res) => {
    let value = await theatresignupinfo.find({});
    res.json(value);
  });

module.exports = router;

const express = require("express");
const router = express.Router();
const premiumclients = require("../user/Common/premiumclients");

//Database
const theatresignupinfo = require("../../models/theatre/signup");
const userTinfo = require("../../models/theatre/abouttheatre")

router.get("/", function (req, res) {
  res.json({ premiumclients: premiumclients });
});

router.post("/", async (req, res, next) => {
  try {
    const loc = req.body.loc;
    const treffarr = [];

    const value1 = await theatresignupinfo.find({ city: loc });
    for (let i = 0; i < value1.length; i++)
      treffarr.push(value1[i].tReferenceNumber);

    const Tdetails = [];
    for (let i = 0; i < treffarr.length; i++) {
      const value = await userTinfo.findOne({ tReferenceNumber: treffarr[i] });
      Tdetails.push(value);
    }

    res.json({ Tdetails: Tdetails });

  }
  catch (err) {
    console.log(err.status);
    next(err);
  }


})

router.get("/getsuggestion", async (req, res) => {
  let value = await theatresignupinfo.find({});
  res.json(value);
});



module.exports = router;

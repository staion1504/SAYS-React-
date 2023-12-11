const express = require("express");
const router = express.Router();

//Database
const theatresignupinfo = require("../../models/theatre/signup");
const userTinfo = require("../../models/theatre/abouttheatre");
const theatrerentedmovieinfo = require("../../models/theatre/theatremovie");
const screeninfo = require("../../models/theatre/theatrescreen");
const movieshowinfo = require("../../models/theatre/movieshowdetails");
const snackinfo = require("../../models/theatre/snackinfo");
const showdatailsinfo = require("../../models/theatre/movieshowdetails");

router.get("/", async function (req, res) {
  let value = await theatresignupinfo.find({});
  // if (req.cookies.isUserLogin)
    res.json({theatres:value});
  // else {
  //   res.redirect("/login");
  // }
});

router.post("/removetheatre", async function (req, res) {
  let treffnum = req.body.tid;
  await theatresignupinfo.deleteOne({ tReferenceNumber: treffnum });
  await userTinfo.deleteOne({ tReferenceNumber: treffnum });
  await theatrerentedmovieinfo.deleteOne({ tReferenceNumber: treffnum });
  await snackinfo.deleteOne({ tReferenceNumber: treffnum });
  await screeninfo.deleteOne({ tReferenceNumber: treffnum });
  await movieshowinfo.deleteOne({ tReferenceNumber: treffnum });


  console.log("Removed the Theatre with Treffnum :"+ treffnum);

  res.json({ k: 1 });
});

  module.exports = router;
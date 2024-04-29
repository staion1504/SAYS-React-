const express = require("express");
const router = express.Router();


//Database
const userinfo = require("../../models/user/signup");
const mgamestatus = require("../../models/user/moviegamestatus");
const quizleaderboard = require("../../models/user/quizleaderboard");
const ticketinfo = require("../../models/user/ticketsinfo");

router.get("/", async function (req, res) {
  let value = await userinfo.find({});
  res.json({users:value});
});

router.post("/removeuser", async function (req, res) {
  let ureffnum = req.body.uid;

  await userinfo.deleteOne({ UserReferenceNumber: ureffnum });
  await ticketinfo.deleteOne({ UserReferenceNumber: ureffnum });
  await mgamestatus.deleteOne({ UserReferenceNumber: ureffnum });
  await quizleaderboard.deleteOne({ UserReferenceNumber: ureffnum });


  console.log("Removed the user with Reff number : " + ureffnum)

  res.json({ k: 1 });
});

  module.exports = router;
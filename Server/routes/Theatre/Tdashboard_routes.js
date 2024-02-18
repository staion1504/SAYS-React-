const express = require("express");
const router = express.Router();

const theatrereviewdata = require("../../models/user/theatrereview");
router.get("/", async function (req, res) {
  let treviewsarr;
  let value = await theatrereviewdata.find({
    tReferenceNumber: req.cookies.currtheatrereffnum,
  });

  if(value.length!=0)
  treviewsarr = value[0]["review"];
  else{
    treviewsarr='';
  }

    res.json({ treviewsarr: treviewsarr,isLogin:true });
});

module.exports = router;
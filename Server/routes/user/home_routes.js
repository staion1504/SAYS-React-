const express = require("express");
const router = express.Router();
const premiumclients = require("../user/Common/premiumclients");

//Database
const theatresignupinfo = require("../../models/theatre/signup");
const userTinfo=require("../../models/theatre/abouttheatre")

router.get("/", function (req, res) {  
      res.json({ premiumclients: premiumclients });
  });

router.post("/",async (req,res)=>{
   const loc= req.body.loc;
   const Tname=req.body.Tname;
   const treffarr=[];
   if(Tname.length==0)
   {
    const value1 = await theatresignupinfo.find({city:loc});
    for(let i=0;i<value1.length;i++)
    treffarr.push(value1[i].tReferenceNumber);
   }

   else
   {
    Tname=(Tname.charAt(0).toUpperCase() + Tname.slice(1).toLowerCase());
    const value2= await theatresignupinfo.find({tName:Tname,city:loc});
    for(let i=0;i<value2.length;i++)
    treffarr.push(value2[i].tReferenceNumber);
   }
   const Tdetails =[];
   for(let i=0;i<treffarr.length;i++){
    const value = await userTinfo.findOne({ tReferenceNumber: treffarr[i] });
    Tdetails.push(value);
   }
   
  //  console.log(Tdetails);
   res.json({Tdetails: Tdetails});
})  

router.get("/getsuggestion", async (req, res) => {
    let value = await theatresignupinfo.find({});
    res.json(value);
  });

module.exports = router;

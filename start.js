const express=require("express"),app=express();app.set("view engine","ejs");const landing=require("./controllers/landing.js");app.use("/",landing),app.use("/assets",express.static("assets")),app.listen(3e3,()=>console.log("The server is started at PORT: 3000"));

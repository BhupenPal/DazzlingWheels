const express=require("express");const app=express();app.set("view engine","ejs");const landing=require("./controllers/landing.js");app.use("/",landing);app.use("/assets",express.static("assets"));app.listen(3000,()=>console.log("The server is started at PORT: 3000"));

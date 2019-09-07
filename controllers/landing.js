const express = require("express");
const Router = express.Router();

const queryModel = require("../models/qModel.js");
const trialModel = require("../models/tModel.js");

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Get Request (INDEX, FREETRIAL, PRODUCTS, OFFERS, CONTACTUS)
Router.get("/", (req, res) => {
  res.render("index.ejs");
});

Router.get("/FreeTrial", (req, res) => {
  res.render("freeTrial.ejs");
});

Router.get("/Products", (req, res) => {
  res.render("proDucts.ejs");
});

Router.get("/Offers", (req, res) => {
  res.render("offers.ejs");
});

Router.get("/ContactUs", (req, res) => {
  res.render("contactUs.ejs");
});

// POST Request (FREETRIAL, CONTACTUS)
Router.post("/FreeTrial", urlencodedParser, (req, res) => {
  let newTrial = new trialModel();
  (newTrial.custName = req.body.custName),
    (newTrial.custNumb = req.body.custNumb),
    (newTrial.carName = req.body.carName),
    (newTrial.carNumb = req.body.carNumb),
    newTrial.save(err => {
      if (err) {
        console.log(err, "error");
        return;
      }
      res.redirect("/");
    });
});

Router.post("/ContactUs", urlencodedParser, (req, res) => {
  let newQuery = new queryModel();
  (newQuery.custfName = req.body.custfName),
    (newQuery.custlName = req.body.custlName),
    (newQuery.custNumb = req.body.custNumb),
    (newQuery.custEmail = req.body.Email),
    (newQuery.messAge = req.body.messAge),
    newQuery.save(err => {
      if (err) {
        console.log(err, "error");
        return;
      }
      res.redirect("/");
    });
});

module.exports = Router;

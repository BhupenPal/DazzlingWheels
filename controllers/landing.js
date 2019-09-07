const express = require("express");
const Router = express.Router();

const queryModel = require("../models/query.js");

Router.get("/", (req, res) => {
  res.render("index.ejs");
});

Router.get("/FreeTrial", (req, res) => {
  res.render("freeTrial.ejs");
});

Router.get("/Products", (req, res) => {
  res.render("productFull.ejs");
});

Router.get("/Offers", (req, res) => {
  res.render("offerFull.ejs");
});

Router.get("/ContactUs", (req, res) => {
  res.render("contactFull.ejs");
});

module.exports = Router;

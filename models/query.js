const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema({
  custName: String,
  custNumb: Number,
  messAge: String
});

module.exports = mongoose.model("query", querySchema);

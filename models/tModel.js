const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DazzlingWheels", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const trialSchema = new Schema({
  custName: String,
  custNumb: Number,
  carName: String,
  carNumb: String,
  custAddr: String
});

module.exports = mongoose.model("trial", trialSchema);

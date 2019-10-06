const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DazzlingWheels", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const querySchema = new Schema({
  custfName: String,
  custlName: String,
  custNumb: Number,
  custEmail: String,
  messAge: String
});

module.exports = mongoose.model("query", querySchema);

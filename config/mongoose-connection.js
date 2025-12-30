const mongoose = require("mongoose");
const config = require("config");
const debuger = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/ecommerce-project1`)
  .then(function () {
    debuger("connected");
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = mongoose.connection;

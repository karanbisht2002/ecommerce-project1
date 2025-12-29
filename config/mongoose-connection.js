const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ecommerce-project1")
  .then(function () {
    console.log("connected");
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = mongoose.connection;

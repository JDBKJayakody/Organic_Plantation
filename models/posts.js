const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  ename: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  nic: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  salary: {
    type: String,
    require: true,
  }
  

  
});

module.exports = mongoose.model("Posts", postSchema);

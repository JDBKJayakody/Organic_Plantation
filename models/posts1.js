const mongoose = require('mongoose');

const postSchema1 = new mongoose.Schema({


  pname: {
    type: String,
    require: true,
  },


  price: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },

  photo: {
    type: String,
    require: true,
  }

});

module.exports = mongoose.model('Posts1', postSchema1);

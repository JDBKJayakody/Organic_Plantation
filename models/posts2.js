const mongoose = require('mongoose');

const postSchema2 = new mongoose.Schema({

    
    fname:{
        type:String,
        require:true,
      }, 
      lname:{
        type:String,
        require:true,
      },
      email:{
        type:String,
        require:true,
      },
      password:{
        type:String,
        require:true,
      },
      isAdmin: {
        type:String,
        require:true,
      },

      

});

module.exports = mongoose.model('Posts2',postSchema2);

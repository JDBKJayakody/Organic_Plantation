const multer = require("multer");


var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,"./uploads" );

    },

    filename:function(req, file, cb){
        cb(null,`${Date.now()}-${file.fieldname}`)
    }
});

var uploads = multer({storage: storage});


module.exports = uploads;
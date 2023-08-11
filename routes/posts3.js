const express = require("express");

const Posts4 = require("../models/posts3");

const router4 = express.Router();

//save posts4

router4.post("/posts3/save", (req, res) => {
  let newPost4 = new Posts4(req.body);

  newPost4.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Post Succssfully",
    });
  });
});

//get posts

router4.get("/posts3", (req, res) => {
  Posts4.find().exec((err, posts4) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: posts4,
    });
  });
});

//delete
router4.delete("/posts3/delete/:id", (req, res) => {
  Posts4.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
    if (err)
      return res.status(400).json({
        message: "Delete  Not Succesfully",
        err,
      });

    return res.json({
      message: "Delete Succesfully",
      deletedPost,
    });
  });
});

module.exports = router4;
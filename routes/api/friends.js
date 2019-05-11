const express = require("express");
const router = express.Router();

const Friend = require("../../models/Friend");

router.get("/", (req, res) => {
  Friend.find()
    .sort({ date: -1 })
    .then(friends => res.json(friends));
});

router.post("/", (req, res) => {
  const newFriend = new Friend({
    name: req.body.name,
    imagelink: req.body.imagelink,
    answer1: req.body.answer1,
    answer2: req.body.answer2,
    answer3: req.body.answer3,
    answer4: req.body.answer4,
    answer5: req.body.answer5,
    answer6: req.body.answer6,
    answer7: req.body.answer7,
    answer8: req.body.answer8,
    answer9: req.body.answer9,
    answer10: req.body.answer10
  });
  newFriend.save().then(friend => res.json(friend));
});

module.exports = router;

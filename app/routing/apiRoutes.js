const router = require("express").Router();

//const path = require('path');


let possibleFriends = [];

router.get("/api/friends", function (req, res) {
    res.send("hello");
});


// Create New Characters - takes in JSON input
router.post("/api/friends", function (req, res) {

    var newFriend = req.body;

    newFriend.friendName = newFriend.friendName.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    possibleFriends.push(newFriend);

    res.json(newFriend);
});

module.exports = router;
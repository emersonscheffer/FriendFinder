const express = require("express");
const router = express.Router();

const Friend = require("../../models/Friend");

router.get("/", (req, res) => {

    let match;
      let matchPic;
      var currentUser
    
    Friend.find()
    .sort({ date: -1 })
    .then((friends) => {
      console.log(" -=- == -=- =- =- =- =- =- =- =- ");
  
      currentUser = friends[0];
  
      var currAnswers = [
        currentUser.answer1,
        currentUser.answer2,
        currentUser.answer3,
        currentUser.answer4,
        currentUser.answer5,
        currentUser.answer6,
        currentUser.answer7,
        currentUser.answer8,
        currentUser.answer9,
        currentUser.answer10
      ];
  
      var recordedDiff = 1000;
    var totalDiff = 0;
      for (var i = 1; i < friends.length; i++) {
  
        var friendAnswer = [
          friends[i].answer1,
          friends[i].answer2,
          friends[i].answer3,
          friends[i].answer4,
          friends[i].answer5,
          friends[i].answer6,
          friends[i].answer7,
          friends[i].answer8,
          friends[i].answer9,
          friends[i].answer10
        ];
  
  
        for (let index = 0; index < currAnswers.length; index++) {
          if (currAnswers[index] === friendAnswer[index]) {
              console.log("is Equal");
          } else {
            var diff = currAnswers[index] - friendAnswer[index];
            var diff2 = friendAnswer[index] - currAnswers[index];
            if (diff > 0) {
              totalDiff += diff;
            } else {
              totalDiff += diff2;
            }
          }
        }
  
        if (recordedDiff > totalDiff) {
          recordedDiff = totalDiff;
          match = friends[i].name;
          matchPic = friends[i].imagelink;
          console.log("the recorded  is ", match, totalDiff);
        }
      }

    res.json({
            matchName: match,
            matchPic: matchPic,
            currentUser: currentUser.name,
            currentUserPic: currentUser.imagelink
        });
     
    });
   

});

module.exports = router;
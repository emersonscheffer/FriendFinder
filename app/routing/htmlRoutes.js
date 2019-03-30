const router = require('express').Router();

const path = require('path');


router.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, "./../public/survey.html"));
    // res.sendFile(path.join(__dirname,"./../public/survey.js"));
});



router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./../public/home.html"));
});

module.exports = router;
const express = require("express");
const mongoose = require("mongoose");

const friends = require('./routes/api/friends');
const match = require('./routes/api/match');
const html = require('./routes/html/htmlRoutes');

const app = express();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/friendshut";
mongoose.connect(MONGODB_URI);

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use('/api/friends', friends);
app.use('/api/match', match);
app.use('/html/htmlRoutes', html);


app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});

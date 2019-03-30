const express = require('express');

const path = require('path');

const PORT = process.env.PORT || 3000;

const routes = require('./app/routing/htmlRoutes');

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(routes);



// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/home.html"));
// });

// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/survey.html"));
// });


app.listen(PORT, () => {
    console.log("Server started on PORT", PORT);
});
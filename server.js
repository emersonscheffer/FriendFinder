const express = require('express');

// const path = require('path');

// const routes = require('./app/routing/htmlRoutes');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("Server started on PORT", PORT);
});
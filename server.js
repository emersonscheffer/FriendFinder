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

app.listen(PORT, () => {
    console.log("Server started on PORT", PORT);
});
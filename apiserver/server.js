// Server

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

const PORT = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

routes(app, {});
app.listen(PORT, () => {
    console.log(`We are live on ${PORT}`);
});

const path = require('path');
const express = require('express');
const routes = require('./routes/routes.js');
require('dotenv').config();

const port = 8080;
const app = express();

app.use(express.static('assets'));
app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

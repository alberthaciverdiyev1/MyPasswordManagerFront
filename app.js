const path = require('path');
const express = require('express');
  //CUSTOM
const routes = require('./routes/routes.js');
require('dotenv').config();

const port = 8083;
const app = express();
app.use(express.json())

app.use(express.static('assets'));
app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));







app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

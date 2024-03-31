const express = require('express');
const login = require("../controller/auth/login");
const exRoute = express.Router();

// // exRoute'ı uygula
// const app = express();
// app.use(exRoute);

exRoute.route('/').get(login.index);

module.exports = exRoute;

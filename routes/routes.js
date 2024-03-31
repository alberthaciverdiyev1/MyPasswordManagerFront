const express = require('express');
const login = require("../controller/auth/login");
const password= require("../controller/password/all");
const note= require("../controller/note/all");
const exRoute = express.Router();

// const app = express();
// app.use(exRoute);

exRoute.route('/').get(login.index);
exRoute.route('/notes').get(note.listAllNotes);
exRoute.route('/passwords-list').get(password.listAllPasswords);

module.exports = exRoute;

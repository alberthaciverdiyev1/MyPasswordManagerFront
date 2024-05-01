const express = require('express');
const auth = require("../controller/auth/auth");
const password= require("../controller/password/all");
const account= require("../controller/auth/account");
const note= require("../controller/note/all");
const exRoute = express.Router();

// const app = express();
// app.use(exRoute);

//AUTH
exRoute.route('/').get(auth.index);
exRoute.route('/login').post(auth.login);
exRoute.route('/register').post(auth.register);


exRoute.route('/notes').get(note.listAllNotes);
exRoute.route('/passwords-list').get(password.listAllPasswords);
exRoute.route('/profile').get(account.profile);
exRoute.route('/forgot-password').get(account.forgotPassword);

module.exports = exRoute;

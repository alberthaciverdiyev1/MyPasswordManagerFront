const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../../models/user');
const { checkMail } = require('../../helpers/check');

const index = (req, res) => {
    res.render('auth/login', { js: 'auth/auth.js' })
}
const login = (req, res) => {
    console.log(req.body);
    // return res.status(200).json({"ela":"login"})
    // Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
// });
}
const register = async (req, res) => {
    const params = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    }
    const user = await User.findOne({ where: { email: params["email"] } });
    if (user) {
        return res.status(409).json({ message: "This email is already in use" });
    }

    if (params.confirmPassword !== req.body.password) {
        return res.status(400).json({
            message: "Passwords do not match"
        })
    }

    const salt = await bcrypt.genSalt(saltRounds);
    params["password"] = await bcrypt.hash(params["password"], salt);

    const newUser = new User({
        email: params["email"],
        password: params["password"],
        role: "user",
    });

    await newUser.save();
    return res.status(201).json({
        message: "User Registered Succesfully"
    })


}
module.exports = {
    index, login, register
}
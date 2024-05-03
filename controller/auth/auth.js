const bcrypt = require('bcrypt');
const saltRounds = 10;

const index = (req, res) => {
    res.render('auth/login', { js: 'auth/auth.js' })
}
const login = (req, res) => {
    console.log(req.body);
    // return res.status(200).json({"ela":"login"})
}
const register = async (req, res) => {
    const params = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    }

    if (params.confirmPassword !== req.body.password) {
        return res.status(400).json({
            message: "Passwords do not match"
        })
    }

    const salt = await bcrypt.genSalt(saltRounds);
    params["password"] = await bcrypt.hash(params["password"], salt);

    console.log(params["password"]);


}
module.exports = {
    index, login, register
}
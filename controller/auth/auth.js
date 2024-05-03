const index = (req,res)=>{
    res.render('auth/login',{js:'auth/auth.js'})
}
const login = (req,res) =>{
    console.log(req.body);
    // return res.status(200).json({"ela":"login"})
}
const register = (req,res) =>{
    console.log(req.body);
}
module.exports = {
    index,login,register
}
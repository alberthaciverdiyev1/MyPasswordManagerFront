const profile = (req,res)=>{
    res.render('auth/profile')
}
const forgotPassword = (req,res)=>{
    res.render('auth/forgot-password')
}
module.exports = {
    profile,
    forgotPassword
}
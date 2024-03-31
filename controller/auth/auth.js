const index = (req,res)=>{
    res.render('auth/login',{js:'auth/auth.js'})
}
const action = (req,res) =>{

}
module.exports = {
    index,action
}
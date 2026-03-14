const userModel = require("../models/user.model")

/**
 * @name registerUserController
 * description register a new user, expects username ,email and password
 * @access public
 */
async function registerUserController(req,res){
    const {username,email,password} = req.body;

    if(!username,!email,!password){
        res.status(400).json({
            message:"Please provide username,email and password " 
        })
    }
    const isUserAlreadyExists = await userModel.findOne({
        $or: [{username},{email}]
    })
 
}

module.exports = {
    registerUserController
}
const User = require('../models/user')

const  UserController =  {
    loginUser: (req,res) => {
        const data = req.body
        console.log(data)
        User.login(data, function(response){
            if(!response) {
                res.status(400).json(null)
            }
            else res.status(200).json(response)         
        })
    },
    createUser: (req,res) => {
        const data = req.body
        console.log(data)
        User.create(data, function(response) {
            if(!response) {
                res.status(400).json(null)
            }
            else res.status(200).json(response)       
        })
    }
}
module.exports =  UserController;
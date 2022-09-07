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
    },
    updateUser: (req,res) => {
        const data = req.body
        console.log(data)
        User.update(data, function(response){
            if(!response) {
                res.status(400).json(null)
            }
            else res.status(200).json(response)         
        })
    },
    rechargeUser: (req,res) => {
        const data = req.body
        console.log(data)
        User.recharge(data, function(response){
            if(!response) {
                res.status(400).json(null)
            }
            else res.status(200).json(response)         
        })
    },
}
module.exports =  UserController;
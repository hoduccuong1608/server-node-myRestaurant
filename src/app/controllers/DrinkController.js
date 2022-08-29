const Drink = require('../models/drink')

const  DrinkController =  {
    getAllDrink: (req,res) => {

        Drink.get(function(response){
            if(!response) {
                res.status(400).json(null)
            }
            else res.status(200).json(response)         
        })
    }
}

module.exports =  DrinkController;
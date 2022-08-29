const Dish = require('../models/dish')

const  DishController =  {
    getAllDish: (req,res) => {
        Dish.get(function(response){
            if(!response) {
                res.status(400).json(null)
            }
            else res.status(200).json(response)         
        })
    }
}

module.exports =  DishController;
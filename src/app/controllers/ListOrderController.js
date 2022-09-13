const ListOrder = require('../models/listOrder')



const  ListOrderController =  {
bookProduct:  (req,res) => {
    let data = Object.create(null);
        data = {...req.body} 
    console.log(data)
    ListOrder.book(data, function(response){
        console.log(response)
        if(!response) {
            res.status(400).json(null)
        }
        else res.status(200).json(response)         
    })
},
getAllBook: (req,res) => {
    const id = req.params.id
    // console.log('id',id)
    ListOrder.getList(id, function(response){
        console.log(response)
        if(!response) {
            res.status(400).json(null)
        }
        else res.status(200).json(response)         
    })
},
}

module.exports =  ListOrderController;
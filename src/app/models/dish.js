const db = require ('../db/mysql')

const Dish = (dish)=> {
    this.id = dish.id
    this.name = dish.name
    this.price = dish.price
    this.url = dish.url
    this.material = dish.material
}

Dish.get =  function(result) {
    let sql = 'SELECT * FROM dishs';
    db.query(sql, function(err, dishs) {
        if(err) {
            return result(false)
         }
        return result(dishs)
         
    })
}


module.exports = Dish
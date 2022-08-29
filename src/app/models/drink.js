const db = require ('../db/mysql')

const Drink = (drink)=> {
    this.id = drink.id
    this.name = drink.name
    this.price = drink.price
    this.url = drink.url
    this.material = drink.material
}

Drink.get =  function(result) {
    let sql = 'SELECT * FROM drinks';
    db.query(sql, function(err, drinks) {
        if(err) {
            return result(false)
         }
        return result(drinks)
         
    })
}
module.exports = Drink
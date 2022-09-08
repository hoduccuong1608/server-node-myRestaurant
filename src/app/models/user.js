const db = require ('../db/mysql')

const User = (user)=> {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.password = user.password
    this.dob = user.dob
    this.admin = user.admin
}

User.create =  function(data, result) {

    let x = `SELECT Email FROM users WHERE Email = '${data.email}'` 
    db.query(x, function(err, email) {
        if(err) {
           return result(false)
        }else if(email.length != 0){
            return result(false)
        } 
        else if(email.length == 0) {
            let x = `INSERT INTO users (Name, Email, PassWord, DoB) VALUE ('${data.name}', '${data.email}', '${data.password}', '${data.dob}')`
            db.query(x, function(err,user){
                if(err) {
                    return  result(false)
                } 
                return result({id: user.insertId, ...data})
            })
        } 
    }
    )
}

User.login =  function (data, result) {
    let sql = `SELECT * FROM users WHERE Email = '${data.email}' AND PassWord = '${data.password}'`
    db.query(sql, function(err, user) {
        if(err) {
            return result (err);
        } else if(user.length == 0){
            return result (false);
        } else return result(user)
    })
}

User.update =  function (data, result) {
    let sqlUpdate = `UPDATE users SET Name = '${data.name}', PassWord = '${data.password}', DoB = '${data.dob}' WHERE UserID = '${data.id}';`
    db.query(sqlUpdate, function(err, update) {
        if(err) {
            return result (err);
        } else {
            sqlUpdate = `SELECT * FROM users WHERE UserID = '${data.id}'`
            db.query(sqlUpdate, function(err, user) {
            if(err) {
            return result (err);
            }else return result(user)
    })
        }
    })
}
User.recharge =  function (data, result) {
    let sqlRecharge = `UPDATE users SET TotalMoney = TotalMoney + '${data.money}' WHERE UserID = '${data.id}';`
    db.query(sqlRecharge, function(err, recharge) {
        if(err) {
            return result (err);
        } else {
            sqlRecharge = `SELECT * FROM users WHERE UserID = '${data.id}'`
            db.query(sqlRecharge, function(err, user) {
            if(err) {
            return result (err);
            }else return result(user)
    })
        }
    })
        }

        User.addItem =  function (data, result) {
            db.query(`SELECT Cart from users WHERE UserID = '${data.id}'`, function(err, listCart) {
                console.log(listCart)
                if(listCart[0].Cart === null) {
                    let sqlAddCart = `UPDATE users SET Cart = ('${JSON.stringify(data.cart)}') WHERE UserID = ${data.id}`
                    db.query(sqlAddCart, function(err, update) {
                        if(err) {
                            return result (err);
                        } else {
                            sqlAddCart = `SELECT Cart FROM users WHERE UserID =${data.id}`
                            db.query(sqlAddCart, function(err, cart) {
                            if(err) {
                            return result (err);
                            }else return result(cart)
                    })
                        }
                    })
                } else {
                let items = listCart[0].Cart.concat(data.cart)
                // console.log(items)
                sqlAddCart = `UPDATE users SET Cart = ('${JSON.stringify(items)}') WHERE UserID = ${data.id}`
                db.query(sqlAddCart, function(err, update) {
                    if(err) {
                        return result (err);
                    } else {
                        sqlAddCart = `SELECT Cart FROM users WHERE UserID =${data.id}`
                        db.query(sqlAddCart, function(err, cart) {
                        if(err) {
                        return result (err);
                        }else return result(cart)
                })
                    }
                })}
            })
        }
    

module.exports = User
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

module.exports = User
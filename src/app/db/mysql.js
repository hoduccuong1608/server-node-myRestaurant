var mysql = require('mysql2')
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "manh2001",
        database: 'restaurant'
      }
)
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!")
})
module.exports = con
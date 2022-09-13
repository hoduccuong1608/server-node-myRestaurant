const db = require ('../db/mysql')

const ListOrder = (list)=> {
    this.id = list.id
    this.UserID = list.userID
    this.TableID = list.tableID
    this.List = list.list
}

ListOrder.book = function(data,result) {
    let sql = `INSERT INTO listorder (UserID, TableID, List) VALUES ('${data.userID}', '1', '${JSON.stringify(data.list)}')`;
    db.query(sql, function(err, list) {
        if(err) {
            return result(false)
         }
        return result(true)
         
    })
}

ListOrder.getList = function(id,result) {
    let sql = `SELECT * FROM listorder WHERE UserID = '${id}'`;
    db.query(sql, function(err, listbook) {
        if(err) {
            return result(false)
         }
        return result(listbook)
         
    })
}
module.exports = ListOrder
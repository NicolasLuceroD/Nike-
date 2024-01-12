const mysql = require ('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'indumentaria_db'
})

module.exports = {connection};  
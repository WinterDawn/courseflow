// https://medium.com/@matthagemann/create-a-mysql-database-middleware-with-node-js-8-and-async-await-6984a09d49f4
// https://github.com/mysqljs/mysql

const util = require('util')
const mysql = require('mysql')


// Connection options: 
// https://github.com/mysqljs/mysql#connection-options
let settings = {
    connectionLimit: 5,
    host : process.env.MYSQL_HOST || 'mysql', //docker
    port: process.env.MYSQL_PORT ||'3306',
    user : process.env.MYSQL_USER ||'root',
    password : process.env.MYSQL_PASSWORD ||'password',
    database : process.env.MYSQL_DATABASE ||'incuvate',
    multipleStatements: true // required to run multiple statements in one call (reset database)
}

const pool = mysql.createPool(settings)

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    if (connection) connection.release()

    return
})

// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query)

module.exports = pool
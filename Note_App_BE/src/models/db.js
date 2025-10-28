const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

console.log("Kết nối DB với:");
console.log("host:", process.env.DB_HOST);
console.log("user:", process.env.DB_USER);
console.log("pass:", process.env.DB_PASSWORD);
console.log("db:", process.env.DB_NAME);

module.exports = pool;
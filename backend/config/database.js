const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "privilege",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db;

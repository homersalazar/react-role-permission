const db = require("../config/database");

exports.storeUser = function (newUser, callback) {
  db.query("INSERT INTO users SET ?", newUser, callback);
};

exports.getUser = function (email, callback) {
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    function (err, results) {
      if (err) return callback(err);
      return callback(null, results.length > 0 ? results[0] : null);
    }
  );
};

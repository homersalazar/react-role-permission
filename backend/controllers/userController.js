const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.storeUser = function (req, res) {
  const { name, email, password } = req.body;

  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      console.error("Error generating salt:", err);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      const credentials = {
        name,
        email,
        password: hash,
      };

      User.storeUser(credentials, (err, result) => {
        if (err) {
          console.error("Error creating user:", err);
          res.status(500).json({ message: "Internal Server Error" });
          return;
        }
        res.json({ message: "User created successfully" });
      });
    });
  });
};

exports.getUser = function (req, res) {
  const { email, password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  User.getUser(email, (err, user) => {
    if (err) {
      console.error("Error finding user:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Make sure to reference the correct password field
    const hashedPassword = user.PASSWORD || user.password;
    if (!hashedPassword) {
      console.error("Password field is missing in the user data");
      return res.status(500).json({ message: "Internal Server Error" });
    }

    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      res.json({ message: "User authenticated successfully" });
    });
  });
};

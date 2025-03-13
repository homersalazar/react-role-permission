const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Routes
router.post("/login", userController.getUser);
router.post("/register", userController.storeUser);
router.get("/users", userController.getAllUser);

module.exports = router;

// userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/create", userController.createUser);
router.put("/edit", userController.updateUser);
router.delete("/delete", userController.deleteUser);
router.get("/getAll", userController.getAllUsers);

module.exports = router;

// userController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("Account Repeated");
    }
    user = new User({
      fullName,
      email,
      password,
    });
    await user.save();
    res.status(201).send("Successfully created");
  } catch (err) {
    res.status(500).send("Check your input!!!");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { fullName, password } = req.body;
    const email = req.query.email; // 假设通过查询参数传递电子邮件
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("Cannot find your account");
    }
    if (fullName) user.fullName = fullName;
    if (password) user.password = await bcrypt.hash(password, 12);
    await user.save();
    res.status(200).send("Successfully updated");
  } catch (err) {
    res.status(500).send("Check your input!!!");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const email = req.query.email; // 假设通过查询参数传递电子邮件
    const user = await User.findOneAndDelete({ email });
    if (!user) {
      return res.status(404).send("Cannot find your account");
    }
    res.status(200).send("Successfully deleted");
  } catch (err) {
    res.status(500).send("Check your input!!!");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Check your input!!!");
  }
};

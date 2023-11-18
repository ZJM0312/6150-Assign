// /api/controllers/authController.js
const authService = require("../services/authService");

exports.login = async (req, res) => {
  try {
    const { fullName, password } = req.body;
    const user = await authService.authenticate({ fullName, password });
    res.json({
      message: "登录成功",
      user: { id: user._id, fullName: user.fullName },
    });
    console.log(`User ${user.fullName} attempted to log in.`);
  } catch (error) {
    res.status(401).send(error);
  }
};

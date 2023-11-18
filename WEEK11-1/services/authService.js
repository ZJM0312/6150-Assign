// /api/services/authService.js
const User = require("../models/User");

const authenticate = async ({ fullName, password }) => {
  const user = await User.findOne({ fullName });
  if (user && user.comparePassword(password)) {
    return user; // 返回用户信息（在生产中应排除密码）
  }
  throw "用户名或密码不正确";
};

module.exports = { authenticate };

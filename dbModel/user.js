/*
 * @Author: zhonglai lu
 * @Date: 2020-01-29 20:53:04
 * @Description: 用户字表设计
 * @Last Modified time: 2020-01-29 20:53:04
 */

const mongoose = require("../pulgins/mongodb");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);

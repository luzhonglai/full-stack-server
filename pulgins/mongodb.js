/*
 * @Author: zhonglai lu
 * @Date: 2020-01-13 15:16:20
 * @Description: mikey.zhaopeng
 */

const { db_URI: URI } = require("../config");
const mongoose = require("mongoose");
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("mongodb open: " + URI);
  })
  .catch(e => {
    console.log("mongoodb error" + e);
  });

module.exports = mongoose;

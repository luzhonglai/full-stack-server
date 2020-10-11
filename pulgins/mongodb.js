/*
 * @Author: zhonglai lu
 * @Date: 2020-01-13 15:16:20
 * @Description: mikey.zhaopeng
 */

const { host, dbName } = require("../config").dbConfig;
import mongoose from 'mongoose'

let DB = null; 

mongoose
  .connect(`${host}/${dbName}`, {
    useNewUrlParser: true,
    useFindAndModify: true,
  }).then(async(db) => {

    console.log('blog 数据库连接成功！--->',host +'/'+ dbName);
  })
  .catch(err => {
    console.log('blog 数据库连接失败！', err);
  });

module.exports = () => DB;

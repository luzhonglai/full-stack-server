/*
 * @Descripttion: 
 * @version: 
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 09:54:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-13 18:32:53
 */
const { MongoClient } = require('mongodb');

const {
	host,
	port,
	dbName
} = require('../config').dbConfig;

let DB = null;

let connectUrl = `mongodb://${host}:${port}/blog`
let client = MongoClient.connect(connectUrl, { useUnifiedTopology: true, useNewUrlParser: true });


client.then(async (db) => {
  DB = db.db(dbName);
	console.log('movie 数据库连接成功！');

}).catch((err) => {

	console.log('movie 数据库连接失败！', err.message);

})

module.exports = () => {
	return DB
}
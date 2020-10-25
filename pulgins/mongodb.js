/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 09:54:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-25 23:23:50
 */
const Mongoose = require('mongoose')

const { host, port, dbName } = require('../config').dbConfig

let DB = null

let connectUrl = `mongodb://${host}:${port}/blog`


// 创建链接
Mongoose.connect(connectUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})


// 链接成功
Mongoose.connection.on('connected', (db,err) => {
	console.log('blog 数据库链接成功')
})

// 链接异常
Mongoose.connection.on('error',(err) => console.log('blog 链接异常' + err))

// 断开链接
Mongoose.connection.on('disconnected',() => console.log('blog  数据库断开链接'))

module.exports = DB

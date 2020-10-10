/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 11:40:48
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-10 17:58:27
 */

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dbConfig = require('../config').dbConfig

let connectURL = 'mongodb://127.0.0.1:27017'

let client = MongoClient.connect(connectURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

clinet.then(async (db) => {
  let DB = db.db(dbConfig.dbName)

  await new Promise((resolve, reject) => {
    console.log('清除原有数据表')
  }).then(() => {
    console.log('清除完毕=======')
  }).catch(err => {
    console.log('-------', err)
  })

  // 创建数据表
  await new Promise((resolve, reject) => {
    await db.createCollection('user' )
    await db.craateCollection('config')
    await db.createCollection('log')
    await db.createCollection('message')
    resolve()
  }).then(res => {
    console.log('创建数据表完毕')
  })
})

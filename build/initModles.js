/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 11:40:48
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-08 21:58:27
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
    await
  }).then(() => {
    console.log('清除完毕=======')
  }).catch(err => {
    console.log('-------', err)
  })
})

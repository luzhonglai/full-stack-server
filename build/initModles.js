/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 11:40:48
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-11 23:11:08
 */

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dbConfig = require('../config').dbConfig

let connectURL = 'mongodb://127.0.0.1:27017'

let client = MongoClient.connect(connectURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

client.then(async (db) => {
  let DB = db.db(dbConfig.dbName)

  await new Promise(async (resolve, reject) => {
    await DB.dropCollection('user').catch((err) => {})
    await DB.dropCollection('log').catch((err) => {})
    await DB.dropCollection('message').catch((err) => {})
    await DB.dropCollection('config').catch((err) => {})
    resolve()
  })
    .then(() => {
      console.log('清除数据集合完毕------>')
    })
    .catch((err) => {
      console.log('-------', err)
    })

  // 创建数据表
  await new Promise(async (resolve, reject) => {
    await DB.createCollection('user')
    await DB.createCollection('config')
    await DB.createCollection('log')
    await DB.createCollection('message')
    resolve()
  }).then((res) => {
    console.log('创建数据表完毕----->')
  })

  //  创建网站信息介绍
  await new Promise(async (resolve, reject) => {
    console.log('创建配置数据')
    let confColl = DB.collection('config')
    await confColl.insertOne({
      "websiteName" : "XXX电影网",
      "keywords" : "最新电影,最新电视剧,最新综艺，最新动漫",
      "description" : "XXX电影网为您提供最新最快的视频分享数据。看热门电影,上春秋影院,支持手机电影在线观看。",
      "footerInfo" : "<p>XXX影视免费提供的完整版全集电影电视剧在线观看数据来自网络视频资源平台，本站未参与任何制作与下载，仅供WEB引用。</p><br/><p>Copyright © XXX影院XXX.COM</p>",
      "notice" : "<p>请勿相信视频中的广告</p>",
      "publicCode" : "",
      "openStatic" : false,
      "openSwiper" : false,
      "isBjTime" : true,
      "allowReply" : false,
      "replyInterval" : 5,
      "replyTextLen" : 20,
      "adoptCheck" : true,
      "allowRegister" : false,
      "shangeWebState" : true,
      "allowDomainAccess" : false,
      "allowDomainList" : "",
      "curPlayerPath" : 'dplayer',
      "filterKeyWord" : true,
      "KeyWordList" : "",
      "curTempPath" : "default",
      "openAppMainNotice" : true,
      "appUpgrade" : false,
      "upgradeInfo" : "",
      "appInitNoticeCon" : ""
    })
    resolve()
  }).then(res =>{
    console.log('配置数据创建完成');
  })
  db.close();
  process.exit();
})

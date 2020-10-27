/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 09:54:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-28 01:35:24
 */
const fs = require('fs')
const Mongoose = require('../pulgins/mongodb')

// let modelConfig = Mongoose.collection('config')


class Api {
  constructor() {}
  async config(req, res, next) {
    // let Config = await modelConfig.findOne()
    console.log(111)
    res.status(500)
    res.json({
      code: 0,
      status:0,
      data: 111,
    })
  }
  async banner(req, res, next) {
    
  }
  async wechatLogin(req, res, next) {}

  static map(req, res, next) {}
}
export default new Api()

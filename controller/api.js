/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 09:54:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-25 23:26:57
 */
const fs = require('fs')
const Mongoose = require('../pulgins/mongodb')

let modelConfig = Mongoose.collection('config')


class Api {
  constructor() {}
  async config(req, res, next) {
    let Config = await modelConfig.findOne()
    res.json({
      code: 1,
      data: Config,
      message: '',
    })
  }
  async banner(req, res, next) {
    
  }
  async wechatLogin(req, res, next) {}

  static map(req, res, next) {}
}
export default new Api()

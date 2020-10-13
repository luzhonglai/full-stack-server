/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 09:54:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-13 23:38:29
 */
const fs = require('fs')
const getDB = require('../pulgins/mongodb');

class Api {
  constructor() {
  }
  async config(req, res, next){
    let memColl = getDB().collection('config');
    let Config = await memColl.findOne()
    res.json({
      code: 1,
      data: Config,
      message:''
    })
  }
  async banner(req,res,next) {
  }
  async wechatLogin(req,res, next){
  }

  static map(req,res, next) {}
}
export default new Api

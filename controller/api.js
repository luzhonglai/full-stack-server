/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 09:54:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-11 23:41:56
 */
const mongoose = require('mongoose')
const db = require('../pulgins/mongodb')

class apiController {
  constructor() {}
  config(res, next){
    console.log(1111)
    res.end('111')
  }
  static map() {}
}

let api = new apiController()
// console.log(api)
export default api

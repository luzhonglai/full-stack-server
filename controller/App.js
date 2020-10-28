/*
 * @Descripttion:
 * @version:
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 11:33:27
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-28 21:22:38
 */
class App {
  constructor() {}
  async home(req, res, next) {
    res.end('首页数据')
  }
  // async list() {}
  // async login() {}
}

export default new App()

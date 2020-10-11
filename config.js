/*
 * @Author: zhonglai lu
 * @Date: 2020-01-13 22:00:30
 * @Description: 配置相关信息
 */

module.exports = {
  port: 8811, // 项目端口号 --- 启动端口
  useHttp: true, // true http ---  false https 
  wechat:{
    wechatAppid: "", //小程序appid
    wechatSecret: "", //小程序
  },
  dbConfig: {
    port: 27017,
    host: 'mongodb://127.0.0.1:27017',
    dbName: 'blog',
  },
  sessToken: {
    host: '127.0.0.1',
    dbName: 'blog',
    collection: 'Token',
    maxAge: 84600,
  },
  sesssCookie: {
    propt: 27017,
    host: '127.0.0.1',
    dbName: 'blog',
    collection: 'Cookie',
    maxAge: 84600,
  }
};

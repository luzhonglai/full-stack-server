/*
 *  @author: zhonglai lu
 *  @version: 1.0.0
 *  @description: 配置跨域
 *  @Last Modified time: 2020-01-13 15:53:28
 */

module.exports = app => {
  app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, OPTIONS"
    );
    if (req.method == "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
  });
};

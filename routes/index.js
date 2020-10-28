/*
 * @Author: zhonglai Lu
 * @Date: 2020-01-13 18:39:14
 * @Description: 路由器入口控制器
 */

import Admin from "./admin";
import Client from "./client";
import Api from "./api";
import App from "./App"


module.exports = app => {
  app.use("/api", Api);
  app.use("/client", Client);
  // app.use("/admin", Admin);
  app.use("/App", App)
};

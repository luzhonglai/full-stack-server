/*
 * @Author: zhonglai Lu
 * @Date: 2020-01-13 18:39:14
 * @Description: 路由器入口控制器
 */
import Admin from "./admin";
import Client from "./client";
import Api from "./api";

module.exports = app => {
  app.use("/apl", Api);
  app.use("/client", Client);
  app.use("/admin", Admin);
};

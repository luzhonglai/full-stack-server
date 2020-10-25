/*
 * @Descripttion: 
 * @version: 
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 09:54:01
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-25 17:43:24
 */

const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");
const passport = require("passport");
const json = require("express-json");
const bodyParser = require("body-parser");
const { port, useHttp } = require("./config");
const app = new express();

//  配置
require("./pulgins/mongodb"); //数据库mongodb
require("./pulgins/http")(app); // 解决跨域
require("./routes/index")(app); // 配置路由入口
// require("./config/passport")(passport); //验证token

// 中间件
app.use(json()); //美化json 数据格式
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

// 配置404
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./static/404.html"));
});

// 创建服务器
const options = {
  key: fs.readFileSync("./keys/server.pem"),
  cert: fs.readFileSync("./keys/server.crt")
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);
const Server = useHttp ? httpServer : httpsServer;

Server.listen(port, err => {
  if (err) throw err;
  console.log(
    `服务地址----> ${useHttp ? "http" : "https"}://localhost:${port}/`
  );
});

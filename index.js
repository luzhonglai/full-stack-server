/**
 *
 *  @Author: zhonglailu
 *  @Date: 2020-01-13 14:40:39
 *  @Description: 搭建exoress中间层服务
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");
const passport = require("passport");
const json = require("express-json");
const bodyParser = require("body-parser");
const { port, isHttp } = require("./config");
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
const Server = isHttp ? httpServer : httpsServer;

Server.listen(port, err => {
  if (err) throw err;
  console.log(
    `Server running at ${isHttp ? "http" : "https"}://localhost:${port}/`
  );
});

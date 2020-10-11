/*
 * @Author: zhonglai lu
 * @Date: 2020-01-13 22:30:28
 * @Description: wetcha-weapp 小程序路由汇总
 */

const R = require("express").Router();
const Api = require("../controller/api.js");


R.get('/config', Api.config)

export default R;

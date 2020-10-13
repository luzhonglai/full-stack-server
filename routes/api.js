/*
 * @Author: zhonglai lu
 * @Date: 2020-01-13 22:30:28
 * @Description: wetcha-weapp 小程序路由汇总
 */

const express = require('express');
import Api from '../controller/api.js';

const R = express.Router()

R.get('/config', Api.config)
R.get('/banner', Api.banner)
R.post('/login', Api.wechatLogin)

export default R;

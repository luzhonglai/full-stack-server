/*
 * @Descripttion: 
 * @version: 
 * @Author: Zhonglai Lu
 * @Date: 2020-09-22 09:56:11
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2020-10-28 21:24:29
 */

const express = require('express')
import App from '../controller/App'

const R = express.Router()

R.get('/home', App.home)


export default R
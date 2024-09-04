/*
 * @Author: Yokaze 2479757568@qq.com
 * @Date: 2024-09-04 18:05:10
 * @LastEditors: Yokaze 2479757568@qq.com
 * @LastEditTime: 2024-09-04 20:40:43
 * @FilePath: \Website-downloader-master\routes\users.js
 * 🐱🐱🐱🐱🐱🐱
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ok/', function(req, res, next) {
  res.send('已归档完毕~');
});

module.exports = router;

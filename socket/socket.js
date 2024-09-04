/*
 * @Author: Yokaze 2479757568@qq.com
 * @Date: 2024-09-04 18:05:10
 * @LastEditors: Yokaze 2479757568@qq.com
 * @LastEditTime: 2024-09-04 20:33:08
 * @FilePath: \Website-downloader-master\socket\socket.js
 * 🐱🐱🐱🐱🐱🐱
 */
// Download full website pages.
var wget = require("../wget");

module.exports = (io) => {
  io.on("connection", function (socket) {
    socket.on("request", function (data) {
      console.log("Request connection received %s", data.token);
      // now graphing the website
      wget(io, data);
    });
  });
};

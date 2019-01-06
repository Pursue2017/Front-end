var http = require("node/01_http");

var tools1 = require("./03_tool-add.js");

// 如果 Node 在当前目录没找到 tool.js 文件，则会去 node_modules 里面去查找
var tools2 = require('03_tool-multiply');

//应该在node_modules/jsliang-module 目录下，通过下面命令行生成一个 package.json
/**
 * 通过 package.json 来引用文件
 * 1. 通过在 jsliang-module 中 npm init --yes 来生成 package.json 文件
 * 2. package.json 文件中告诉了程序入口文件为 ："main": "tools.js",
 * 3. Node 通过 require 查找 jsliang-module，发现它有个 package.json
 * 4. Node 执行 tools.js 文件
 */

var tools3 = require('jsliang-module');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"});
    res.write('<h1 style="text-align:center">Hello NodeJS</h1>');
    console.log(tools1.add(1,2,3));
    console.log(tools2.multiply(1,2,3,4));
    console.log(tools3.add(1,2,3));
    res.end();
}).listen(3000);
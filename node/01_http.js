//http模块开启服务
//引入http模块
var http = require("http");

//创建服务
http.createServer(function(req, res){
    //设置http头部
    res.writeHead(200, {"Content-Type":"text/html,;charset=UTF-8"});
    //往页面打印值
    res.write('<h1 style="text-align:center">Hello NodeJS</h1>');
    //结束响应
    res.end();
}).listen(3000); //监听端口
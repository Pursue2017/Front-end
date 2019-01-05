//url模块

//引入url模块
var url = require("url");

//引入http模块
var http = require("http");

//创建服务
http.createServer((req, res) => {
    //获取服务器请求,这里要记得 Node 运行过程中，它请求了两次
    // http://localhost:3000/ 为一次，
    // http://localhost:3000/favicon.ico 为第二次
    if(req.url !== "/favicon.ico") {
        //url的parse方法,true转换为对象
        var result = url.parse(req.url, true);
        console.log(req.url);
        console.log(result);
        console.log(result.query.userName);
        console.log(result.query.userAge);
    }
    //设置http头部
        res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"});
    //往页面写东西
        res.write("<h1 style='text-align:center'>Hello NodeJS</h1>");
    //结束响应
        res.end();
}).listen(3000);


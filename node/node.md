浏览器组成

渲染引擎工作原理

浏览器访问服务器过程

请求报文和响应报文

web开发本质

C/S、B/S

Nodejs特点，Nodejs中单线程非阻塞IO的解释

nvm

REPL

Process全局模块直接使用，fs模块需引入

fs.writeFile(file, data[,option], callback)	data可以是string、buffer

fs.readFile(file, [,option], callback)

__dirname、__filemame表示正在执行的js文件所在的目录、完整路径

Path模块进行路径拼接	path.join([...paths])		require引入

fs.mkdir(path, callback)

异步操作无法用try-catch捕获，要通过error，同步用try-catch

通过http模块创建一个简单的http服务程序
```
var http = require('http');
var server = http.creatServer();
server.on('request', function(req, res) {
res.write('hello world');
res.end();
});
server.listen(8080, function(){
console.log('服务器启动了，访问8080端口'）;
}
```
设置响应报文头
```
res.setHeader('Content-Type', 'text/html; charset=utf-8');
res.write('Hello <h1>World</h1>!!你好世界');
```
根据不同请求做出不同响应
req.url获取用户请求的路径
```
http.createServer(function(req, res){

}).listen(8080, function(){})
```

mime模块	mime.getType('txt')	getExtension('text/plain')

对于服务器url就是一个标识符，服务器处理请求根据自身的逻辑

request、response对象常用属性	httpIncomingMessage、ServerResponse

request.headers(rawHeaders, httpVersion, method, url)

response.statusCode(statusMessage, writeHead, setHeader)

res.writeHead(404, 'NotFound', {
'Content-Type':'text/html; charset=utf-8'
})

Modules和Packages的区别		包有一个package.json文件（包描述文件），package.json

url模块的parse方法   
```
url.parse(urlString[,parseQueryString[,slashesDeonteHost]])     urlObj
Href:	protocol(protocol)	auth(username, password)		host(hostname, port)	
Path(pathname, search)		hash(hash)
```

Query模块 queryString.parse(str[,sep[,eq[,options]]])	把post请求的查询字符串转换为一个json对象

underscore引入	.zip和.unzip
```
var _ = require('underscore');
var html = '<h2><%= name %></h2>’;
var fn = _.template(html);
var html = fn{{name:"达达"}};
console.log(html);
```

require加载是同步的，多个require依次加载

Nodejs中模块的分类（核心（fs, http, path, url）、文件（.js, .json, .node依次加载）、第三方（mime, cheerio, moment, mongo））

require加载模块原理（被加载的模块会先执行一次）

Module表示当前模块自身，类似this

Common.js规范，其他模块require得到的是Module.exports的输出

Exports相当于快捷方式，建议使用module.exports

Express框架（基于nodejs开发，是一个模块）	安装和引入
```
var express = require('express');
var app = express();
必须严格等于/index
app.get('/index', function(req, res) {
res.end('hello world!');
})
app.listen(9082, function() {
console.log('启动了')；
}
以/index开头
app.use('/index', function(req, res) {
res.end('hello world!');
})
严格等于，不限定请求方法
app.all('/index', function(req, res) {
res.end('hello world!');
})
通过req.params获取路由中的参数
app.get('/news/:year/:month/:day', function(req, res) {
res.end(req.params);
})
找到第一个就不找后面的了
/xxx是虚拟路径
模拟Apache实现静态资源托管服务
app.use('/xxx', express.static(path.join(__dirname, 'pp')));
app.use('/xxx', express.static(path.join(__dirname, 'public')));
```
res对象常用的方法	json、send、redirect、sendFile

[express路由](http://expressjs.com/zh-cn/guide/routing.html)

ejs模板		安装和引入
```
var ejs = require('ejs');
var html = '<h1><%= username%></h1>'
var result = ejs.render(html, {username: '张三'});
console.log(result);

ejs.renderFile(filename, data, options, function(err, str){

});
```